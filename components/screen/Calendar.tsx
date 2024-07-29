import { View, Text } from 'react-native';
import React from 'react';

const CalendarCard = ({
  bg,
  time,
  title,
}: {
  bg: string;
  time: string;
  title: string;
}) => {
  return (
    <View className={`${bg} rounded-xl p-4 flex justify-between mb-3`}>
      <View className="gap-2">
        <Text className="text-white font-semibold text-[8px]">{time}</Text>
        <Text className="text-white font-semibold text-[12px]">{title}</Text>
        <Text className="text-white font-semibold text-[9px]">
          Computer Science Lecture Theater
        </Text>
      </View>
    </View>
  );
};

const Calendar = () => {
  const data = [
    {
      bg: 'bg-[#2ee16d]',
      title: 'Artificial intelligence',
      time: '12:00am-14:00pm',
    },
    {
      bg: 'bg-[#7fb4f0]',
      title: 'Programming Language',
      time: '14:00am-16:00pm',
    },
  ];
  return (
    <View>
      <View className="h-96" />
      <View className="p-4">
        <Text className="font-semibold">Today</Text>
        <Text className="text-[#74749F] text-xs font-semibold my-2">
          You have 2 classes to attend
        </Text>
        <View className="flex flex-row gap-2 items-center mb-4">
          <Text className="text-[8px] font-semibold">12:00</Text>
          <View className="flex-1 bg-black w-max h-[0.5px]" />
        </View>
        {data.map((item) => (
          <CalendarCard {...item} />
        ))}
      </View>
    </View>
  );
};

export default Calendar;
