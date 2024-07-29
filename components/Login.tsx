import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/utils/types';
import { auth } from '../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const navigation = useNavigation<NavigationProps>();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate('TabNavigator');
        console.log('Logged in with:', user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleInputChange = (name: string, value: string) => {
    setLoginForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <View className="h-screen">
      <View className="mt-10 bg-[#677CE4] py-3 pb-32">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/arrow-left.png')}
            className="mt-3"
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/board.png')}
          className="mx-auto mt-16"
        />
      </View>
      <View className="pt-10 mx-10">
        <Text className="text-2xl font-bold">Login</Text>
        <Text className="pt-4">Welcome back, we've missed you</Text>
        <View className=" mt-10">
          <Text className="">Email</Text>
          <TextInput
            placeholder="Enter your Email"
            className="border-2 border-gray-200 rounded-xl py-4 px-3"
            value={loginForm.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          <Text className=" mt-5">Password</Text>
          <TextInput
            placeholder="Enter your Password"
            className="border-2 border-gray-200 rounded-xl py-4 px-3"
            value={loginForm.password}
            onChangeText={(text) => handleInputChange('password', text)}
            secureTextEntry
          />
          <View className="flex-row justify-end items-center mt-2">
            <Text className="text-gray-500">Forgot Password?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ResetPassword')}
            >
              <Text className="text-[#2683F1]">Reset</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="bg-[#677CE4] py-4 rounded-3xl mt-16"
            onPress={handleLogin}
          >
            <Text className="text-white text-center">Login</Text>
          </TouchableOpacity>
          <View className="flex-row items-center justify-center mt-2">
            <Text className="text-center text-[#8491A4]">
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
              className="py-3 rounded-3xl"
            >
              <Text className="text-[#2683F1] text-center">Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
