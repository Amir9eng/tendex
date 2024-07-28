import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/utils/types';

export default function ResetPassword() {
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
      <View className="pt-10 mx-10">
        <Text className="text-2xl font-bold">Reset Password</Text>
        <Text className="pt-4">
          Enter the email associated with your account and we’ll send an OTP to
          your email
        </Text>
        <View className=" mt-10">
          <Text className="py-2">Email</Text>
          <TextInput
            placeholder="Enter your Email"
            className="border-2 border-gray-200 rounded-xl py-4 px-3"
          />
          <TouchableOpacity
            className="bg-[#677CE4] py-4 rounded-3xl mt-16"
            onPress={() => navigation.navigate('Otp')}
          >
            <Text className="text-white text-center">Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
