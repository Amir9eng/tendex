import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export const CustomCheckbox = ({
  value,
  onValueChange,
}: {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}) => (
  <TouchableOpacity onPress={() => onValueChange(!value)}>
    <View
      className={`w-5 h-5 border-2 border-gray-400 mr-2 ${
        value ? 'bg-blue-500' : 'bg-white'
      }`}
    >
      {value && <Text className="text-white text-xs text-center">✓</Text>}
    </View>
  </TouchableOpacity>
);
