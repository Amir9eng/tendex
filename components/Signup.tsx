import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { NavigationProps } from '@/utils/types';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import InputField from './input-field';
import { CustomCheckbox } from './CheckBox';

export default function Signup() {
  const navigation = useNavigation<NavigationProps>();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View className="h-screen bg-gray-200">
      <View className="mt-10 bg-gray-200 py-3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/arrow-left-black.png')}
            className="mt-3 ml-4"
          />
        </TouchableOpacity>
      </View>
      <ScrollView className="pt-5 mx-5">
        <Text className="text-2xl font-bold">Sign up</Text>
        <Text className="pt-4">Enter your correct credentials</Text>

        <View className="mt-5">
          <Text className="py-2">Matric Number</Text>
          <TextInput
            placeholder="Enter your Name"
            className="border-2 border-gray-300 bg-white rounded-xl py-4 px-3"
          />
        </View>
        <InputField label="First Name" placeholder="Enter your Firstname" />
        <InputField label="Last Name" placeholder="Enter your Lastname" />
        <InputField label="Email" placeholder="Enter your Email" />
        <InputField label="Password" placeholder="Enter your Password" />
        <View className="flex-row items-center mt-4">
          <CustomCheckbox value={isChecked} onValueChange={setIsChecked} />
          <Text className="ml-2">
            I agree to the terms of service and privacy policy
          </Text>
        </View>
      </ScrollView>
      <View className="mb-10">
        <TouchableOpacity
          className="bg-[#677CE4] py-4 rounded-3xl mx-4"
          onPress={() => navigation.navigate('Login')}
        >
          <Text className="text-white text-center">Proceed</Text>
        </TouchableOpacity>
        <Text className="text-center text-[#8491A4]">
          Already have an account?
          <TouchableOpacity>
            <Text className="text-[#2683F1]"> Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}
