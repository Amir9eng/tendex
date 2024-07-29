import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View>
      <View className="pt-16 flex-row px-5">
        <Image source={require('../assets/avatar.png')} />
        <View className="flex-1 ml-5">
          <Text className="">Welcome!</Text>
          <Text className="text-2xl">Wahab Babatunde</Text>
        </View>
        <Image source={require('../assets/notice.png')} />
      </View>
      <View className="pt-10 px-5">
        <Text className="text-2xl font-bold">Today's Schedule</Text>
        <View className="flex-row mt-5">
          <View className="bg-[#677CE4] py-3 px-5 rounded-xl flex-1 mr-5">
            <Text className="text-white">10:00 AM</Text>
            <Text className="text-white">Mathematics</Text>
          </View>
          <View className="bg-[#677CE4] py-3 px-5 rounded-xl flex-1">
            <Text className="text-white">12:00 PM</Text>
            <Text className="text-white">Physics</Text>
          </View>
        </View>
        <View className="flex-row mt-5">
          <View className="bg-[#677CE4] py-3 px-5 rounded-xl flex-1 mr-5">
            <Text className="text-white">10:00 AM</Text>
            <Text className="text-white">Mathematics</Text>
          </View>
          <View className="bg-[#677CE4] py-3 px-5 rounded-xl flex-1">
            <Text className="text-white">12:00 PM</Text>
            <Text className="text-white">Physics</Text>
          </View>
        </View>
        <View className="flex-row mt-5">
          <View className="bg-[#677CE4] py-3 px-5 rounded-xl flex-1 mr-5">
            <Text className="text-white">10:00 AM</Text>
            <Text className="text-white">Mathematics</Text>
          </View>
          <View className="bg-[#677CE4] py-3 px-5 rounded-xl flex-1">
            <Text className="text-white">12:00 PM</Text>
            <Text className="text-white">Physics</Text>
          </View>
        </View>
        <View className="flex-row mt-5">
          <View className="bg-[#677CE4] py-3 px-5 rounded-xl flex-1 mr-5">
            <Text className="text-white">10:00 AM</Text>
            <Text className="text-white">Mathematics</Text>
          </View>
          <View className="bg-[#677CE4] py-3 px-5 rounded-xl flex-1">
            <Text className="text-white">12:00 PM</Text>
            <Text className="text-white">Physics</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
