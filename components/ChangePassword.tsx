import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
import { NavigationProps } from '@/utils/types';
import { useNavigation } from '@react-navigation/native';

export default function ChangePassword() {
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
      <View className="pt-5 mx-10">
        <Text className="text-2xl font-bold">Create new Password</Text>
        <Text className="pt-4">
          Your new password must be different from previously used passwords
        </Text>
        <View className=" mt-10">
          <Text className="py-2">New Password</Text>
          <TextInput
            placeholder="Enter your password"
            className="border-2 border-gray-200 rounded-xl py-4 px-3"
          />
          <Text className="py-2 mt-5">Confirm Password</Text>
          <TextInput
            placeholder="Enter your password"
            className="border-2 border-gray-200 rounded-xl py-4 px-3"
          />
          <TouchableOpacity
            className="bg-[#677CE4] py-4 rounded-3xl mt-10"
            onPress={() => navigation.navigate('Success')}
          >
            <Text className="text-white text-center">Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
