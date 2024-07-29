import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import InputField from './input-field';
import { NavigationProps } from '@/utils/types';
import { useNavigation } from '@react-navigation/native';

export default function PersonalInfo() {
  const navigation = useNavigation<NavigationProps>();
  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <View className="mt-1 bg-gray-200 py-3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/arrow-left-black.png')}
            className="mt-3 ml-4"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        className="flex-1 px-5"
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Text className="text-2xl font-bold mt-5">Personal Information</Text>
        <Text className="pt-4">Enter your correct credentials</Text>

        <View className="mt-5">
          <Text className="py-2">Hostel </Text>
          <TextInput
            placeholder="EArafims 2 Hostel, SUB lane"
            className="border-2 border-gray-300 bg-white rounded-xl py-4 px-3"
          />
        </View>
        <InputField label="Faculty" placeholder="Computer Science" />
        <InputField
          label="Department"
          placeholder="Information and telecomunication"
        />
        <InputField label="Home Address" placeholder="3" />
        <InputField label="State" placeholder="Lagos" />
        <InputField label="Country" placeholder="Nigeria" />
        <InputField label="Postcode" placeholder="234544" />

        <View className="mt-6 mb-4">
          <TouchableOpacity
            className="bg-[#677CE4] py-4 rounded-3xl"
            onPress={() => navigation.navigate('Home')}
          >
            <Text className="text-white text-center">Proceed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
