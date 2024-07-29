import { View, Text, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { CalendarCard } from './screen/Calendar';
import QRCode from 'react-native-qrcode-svg';
import BasicButton from './BasicButton';

const GenerateQr = ({
  setGenarated,
}: {
  setGenarated: (val: boolean) => void;
}) => {
  const [classes, setClasses] = useState<any>();
  const [isQr, setIsQr] = useState<boolean>(false);
  const data = [
    {
      bg: 'bg-[#7fb4f0]',
      title: 'Prof. Abdul-salam Abdul-Rahman',
      time: '12:00pm-14:00pm',
      desc: 'Computer Lecture theater',
    },
    {
      bg: 'bg-[#7fb4f0]',
      title: 'Dr. Ibrahim Salman',
      time: '10:00am-12:00pm',
      desc: 'Computer science Lecture theater',
    },
    {
      bg: 'bg-[#7fb4f0]',
      title: 'Dr. Taiya Fagbemi',
      time: '15:00pm-18:00pm',
      desc: 'Computer science theater',
    },
  ];

  return (
    <View className="pt-20 px-4">
      {isQr && (
        <Pressable onPress={() => setIsQr(false)}>
          <Image source={require('../assets/arrow-left-black.png')} />
        </Pressable>
      )}
      <Text className="text-center font-bold mb-5">
        Generate Qr Code to sign in for Upcoming classes
      </Text>
      {isQr ? (
        <View style={{ alignSelf: 'center' }}>
          <QRCode value={JSON.stringify(classes)} size={200} />
          <Pressable
            onPress={() => setGenarated(true)}
            className="px-4 py-2 rounded-full mt-10 bg-[#677CE4]"
          >
            <Text className="text-[12px] font-semibold text-white text-center">
              Proceed
            </Text>
          </Pressable>
        </View>
      ) : (
        data.map((item) => (
          <Pressable
            key={item.title}
            onPress={() => {
              setClasses(item);
              setIsQr(true);
            }}
          >
            <CalendarCard {...item} />
          </Pressable>
        ))
      )}
    </View>
  );
};

export default GenerateQr;
