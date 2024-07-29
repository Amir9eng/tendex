import { View, Text, Pressable, ImageBackground, Image } from 'react-native';
import React, { Fragment, useState } from 'react';
import ModalEl from '@/components/ModalEl';
import InputField from '@/components/input-field';
import BasicButton from '@/components/BasicButton';
import Academics from '../icons/Academics';

const SettingsCard = ({ title, texts }: { title: string; texts: string[] }) => {
  return (
    <View className="mb-6">
      <View className="flex flex-row items-center space-x-2">
        <Academics />
        <Text className="font-semibold">{title}</Text>
      </View>
      <View className="h-[0.5px] w-full bg-black my-3" />
      <View className="gap-3">
        {texts.map((item) => (
          <View key={item} className="flex flex-row justify-between">
            <Text className="text-sm font-semibold">{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const Settings = () => {
  const [personalInfo, setPersonalInfo] = useState(false);
  return (
    <Fragment>
      <View className="p-4 pt-16">
        <View className="gap-4">
          <Text className="text-[22px] font-semibold">Settings</Text>
        </View>
        <Pressable
          onPress={() => setPersonalInfo(true)}
          className="flex flex-row p-3 rounded-xl bg-[#E9ECFB] border-[#BEC7F4] border my-6"
        >
          <View className="flex flex-row items-center flex-1 space-x-1">
            <Image source={require('../../assets/smallAvatar.png')} />
            <View className="gap-1">
              <Text className="font-bold">Wahab Rahman</Text>
              <Text className="text-[11px] text-[#71719D] font-medium">
                Personal Info
              </Text>
            </View>
          </View>
        </Pressable>
        <SettingsCard
          title="Academics"
          texts={['Add course', 'Attendance report']}
        />
        <SettingsCard
          title="Other"
          texts={['Language', 'Notification', 'Support']}
        />
        <View className="self-center w-1/2 border border-red-500 rounded-full p-2">
          <Text className="text-[#CD3535] text-sm font-semibold self-center">
            Log Out
          </Text>
        </View>
      </View>
      {personalInfo && (
        <ModalEl visible>
          <View className="flex-1 bg-white">
            <ImageBackground
              className="pt-8 px-4 h-40"
              source={require('../../assets/ProfileHeader.png')}
            >
              <Pressable onPress={() => setPersonalInfo(false)}>
                <Image
                  source={require('../../assets/arrow-left-black.png')}
                  className="mt-3"
                />
              </Pressable>
            </ImageBackground>
            <Image
              className="self-center mt-[-50px]"
              source={require('../../assets/avatar.png')}
            />
            <View className="rounded-tr-2xl rounded-tl-2xl p-4 bg-white flex-1">
              <InputField
                placeholder="Enter Matric Number"
                label="Matric Number"
              />
              <InputField placeholder="Enter First Name" label="First Name" />
              <InputField placeholder="Enter Last Name" label="Last Name" />
              <InputField placeholder="Enter Email" label="Email" />
              {['Birth', 'Gender'].map((item) => (
                <View key={item} className="flex justify-between">
                  <Text className="text-[#9292B4] font-semibold">{item}</Text>
                </View>
              ))}
              <BasicButton text="Change Password" link={''} />
            </View>
          </View>
        </ModalEl>
      )}
    </Fragment>
  );
};

export default Settings;
