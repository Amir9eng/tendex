import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import GenerateQr from '../GenerateQr';
import LecturerIcon from '../icons/LecturerIcon';
import LocationIcon from '../icons/TheatreIcon';
import TimeIcon from '../icons/TimeIcon';
import { Camera, CameraView } from 'expo-camera';
import InfoIcon from '../icons/InfoIcon';

export type IProduct = {
  title: string;
  desc: string;
  time: string;
};

const QrCode = () => {
  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [generated, setGenarated] = useState(false);
  const [info, setInfo] = useState<IProduct | null>(null);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);

    try {
      const decodedData = JSON.parse(data);
      console.log({ decodedData });
      console.log(
        `Bar code with type ${type} and data ${data} has been scanned!`
      );
      setInfo(decodedData);
    } catch (error) {
      console.error('Invalid QR code data:', error);
      setInfo(null);
    }
  };
  const qrOptions = [
    { icon: <LecturerIcon />, title: 'Lecturer', desc: info?.title },
    { icon: <LocationIcon />, title: 'Lecture Room', desc: info?.desc },
    { icon: <TimeIcon />, title: 'Time', desc: info?.time },
  ];
  return (
    <>
      {!generated ? (
        <GenerateQr setGenarated={setGenarated} />
      ) : (
        <View className="px-5 pt-28">
          {!info ? (
            <>
              <View className="flex space-y-4 items-center">
                <Text className="font-semibold">Qr Code Scanner</Text>
                <Text className="text-[11px]">
                  Point your camera to the QR code
                </Text>
                <View style={{ width: '80%', height: '70%' }}>
                  {/* <BarCodeScanner
                    onBarCodeScanned={
                      scanned ? undefined : handleBarCodeScanned
                    }
                    style={{ width: '100%', height: '100%', flex: 1 }}
                  /> */}
                  <CameraView
                    onBarcodeScanned={
                      scanned ? undefined : handleBarCodeScanned
                    }
                    barcodeScannerSettings={{
                      barcodeTypes: ['qr', 'pdf417'],
                    }}
                    style={{ width: '100%', height: '100%' }}
                  />
                </View>
              </View>
              <View className="flex flex-row items-center justify-between mt-8">
                <Text>Restart</Text>
                <View className="px-4 py-2 rounded-full bg-[#677CE4]">
                  <Text className="text-[12px] font-semibold text-white">
                    Sign in
                  </Text>
                </View>
                <Text>Cancel</Text>
              </View>
            </>
          ) : (
            <View className="flex flex-col space-y-4 items-center">
              <View className="px-3 py-1 rounded-full bg-[#E9ECFB] border border-[#BEC7F4]">
                <Text className="text-[10px] font-medium">status</Text>
              </View>
              <InfoIcon />
              <Text className="font-semibold">
                You have signed in to this class
              </Text>
              <Text className="text-[11px]">The class ends in 2hrs..</Text>
              <Text>----------------------------------------</Text>
              <View className="space-y-5">
                {qrOptions.map((options) => (
                  <View
                    key={options.title}
                    className="flex flex-row items-center space-x-2"
                  >
                    {options.icon}
                    <View>
                      <Text className="text-[12px] font-semibold mb-1">
                        {options.title}
                      </Text>
                      <Text className="text-[10px]">{options.desc}</Text>
                    </View>
                  </View>
                ))}
              </View>
              <View className="flex flex-row gap-3">
                <View className="px-4 py-2 rounded-full bg-[#EDEDF3] border border-[#CDCDDD]">
                  <Text className="text-[12px] font-semibold text-[#9292B4]">
                    Cancel
                  </Text>
                </View>
                <View className="px-4 py-2 rounded-full bg-[#677CE4]">
                  <Text className="text-[12px] font-semibold text-white">
                    Sign out
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default QrCode;
