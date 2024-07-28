import { View, Text, TextInput } from 'react-native';
import React from 'react';

export default function InputField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <View className="mt-3">
      <Text className="py-2">{label}</Text>
      <TextInput
        placeholder={placeholder}
        className="border-2 border-gray-300 bg-white rounded-xl py-4 px-3"
      />
    </View>
  );
}
