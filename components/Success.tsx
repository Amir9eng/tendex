import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { NavigationProps } from '@/utils/types';
import { useNavigation } from '@react-navigation/native';

export default function Success() {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View className="h-screen">
      <View className="mt-10 bg-gray-200 py-3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/arrow-left-black.png')}
            className="mt-3 ml-8"
          />
        </TouchableOpacity>
      </View>
      <View className="pt-5 mx-10 mt-20">
        <Image source={require('../assets/sheild.png')} className="mx-auto" />
        <Text className="text-2xl text-center font-bold">Success</Text>
        <Text className="pt-4">
          Your password has been changed successfully
        </Text>
        <TouchableOpacity
          className="bg-[#677CE4] py-4 rounded-3xl mt-10"
          onPress={() => navigation.navigate('Login')}
        >
          <Text className="text-white text-center">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
