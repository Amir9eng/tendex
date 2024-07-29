import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import { NavigationProps } from '@/utils/types';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';
import { auth } from '../firebase.config';
import InputField from './input-field';
import { CustomCheckbox } from './CheckBox';
import {
  getAuth,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from 'firebase/auth';
import Toast from 'react-native-toast-message';

export default function Signup() {
  const navigation = useNavigation<NavigationProps>();
  const [isChecked, setIsChecked] = useState(false);

  const [signupForm, setSignupForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    matricNumber: '',
  });

  const handleSignUp = async () => {
    if (!isChecked) {
      alert('Please agree to the terms of service and privacy policy');
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const signInMethods = await fetchSignInMethodsForEmail(
        auth,
        signupForm.email
      );

      if (signInMethods.length > 0) {
        alert(
          'An account with this email address already exists. Please use another email.'
        );
      } else {
        const response = await createUserWithEmailAndPassword(
          auth,
          signupForm.email,
          signupForm.password
        );
        navigation.navigate('PersonalInfo');
        console.log('response', response);
        alert('Your account has been created successfully');
      }
    } catch (error: any) {
      console.error({ error: JSON.stringify(error, null, 2) });
      const errorMessage =
        error.customData._tokenResponse.error.message.replaceAll('_', ' ');
      Toast.show({
        type: 'error',
        text1: errorMessage,
      });
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setSignupForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
        <Text className="text-2xl font-bold mt-5">Sign up</Text>
        <Text className="pt-4">Enter your correct credentials</Text>

        <View className="mt-5">
          <Text className="py-2">Matric Number</Text>
          <TextInput
            placeholder="Enter your Matric Number"
            className="border-2 border-gray-300 bg-white rounded-xl py-4 px-3"
            value={signupForm.matricNumber}
            onChangeText={(text) => handleInputChange('matricNumber', text)}
          />
        </View>
        <InputField
          label="First Name"
          placeholder="Enter your Firstname"
          value={signupForm.firstName}
          onChangeText={(text) => handleInputChange('firstName', text)}
        />
        <InputField
          label="Last Name"
          placeholder="Enter your Lastname"
          value={signupForm.lastName}
          onChangeText={(text) => handleInputChange('lastName', text)}
        />
        <InputField
          label="Email"
          placeholder="Enter your Email"
          value={signupForm.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
        <InputField
          label="Password"
          placeholder="Enter your Password"
          value={signupForm.password}
          onChangeText={(text) => handleInputChange('password', text)}
          secureTextEntry
        />
        <InputField
          label="Confirm Password"
          placeholder="Confirm your Password"
          value={signupForm.confirmPassword}
          onChangeText={(text) => handleInputChange('confirmPassword', text)}
          secureTextEntry
        />
        <View className="flex-row items-center mt-4">
          <CustomCheckbox value={isChecked} onValueChange={setIsChecked} />
          <Text className="ml-2 flex-1">
            I agree to the terms of service and privacy policy
          </Text>
        </View>

        <View className="mt-6 mb-4">
          <TouchableOpacity
            className="bg-[#677CE4] py-4 rounded-3xl"
            onPress={handleSignUp}
          >
            <Text className="text-white text-center">Proceed</Text>
          </TouchableOpacity>
          <Text className="text-center text-[#8491A4] mt-4">
            Already have an account?
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="text-[#2683F1]"> Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
