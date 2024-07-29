import { View, Text, Image } from 'react-native';
import React from 'react';

const ArticleTile = ({ text }: { text: string }) => {
  return (
    <View className="flex flex-row items-center gap-3 mt-2">
      <Image source={require('../assets/SmallArticle.png')} />
      <View>
        <Text className="font-semibold text-xs mb-1">{text}</Text>
        <View className="flex flex-row gap-2 items-center">
          <Text className="font-medium text-[11px]">22 October 2020</Text>
          <View className="w-1 h-1 rounded-full bg-black" />
          <Text className="font-medium text-[11px]">3 Min</Text>
        </View>
      </View>
    </View>
  );
};

export default ArticleTile;
