import { View, Text, Image } from 'react-native';
import React from 'react';

const ArticleHeader = ({
  text,
  reverse,
}: {
  text: string;
  reverse?: boolean;
}) => {
  return (
    <View className={reverse ? 'flex flex-col-reverse' : ''}>
      <Image className="w-full" source={require('../assets/Article1.png')} />
      <Text className="text-sm font-semibold my-2">{text}</Text>
      <View className="flex flex-row gap-2 items-center">
        <Text className="font-medium text-xs">22 October 2020</Text>
        <View className="w-1 h-1 rounded-full bg-black" />
        <Text className="font-medium text-xs">3 Min</Text>
      </View>
    </View>
  );
};

export default ArticleHeader;
