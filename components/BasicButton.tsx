import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationProps } from '@/utils/types';
import { useNavigation } from '@react-navigation/native';

export default function BasicButton({
  text,
  link,
}: {
  text: string;
  link: keyof NavigationProps['routes'];
}) {
  const navigation = useNavigation<NavigationProps>();
  return (
    <TouchableOpacity
      className="bg-[#677CE4] py-4 rounded-3xl mt-10"
      onPress={() => navigation.navigate(link)}
    >
      <Text className="text-white text-center">{text}</Text>
    </TouchableOpacity>
  );
}
