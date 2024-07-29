import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import PendingIcon from '@/components/icons/PendingIcon';
import AttendIcon from '@/components/icons/AttendIcon';
import AttendedIcon from '@/components/icons/AttendedIcon';
import MissedIcon from '@/components/icons/MissedIcon';

type ScanCardProp = {
  code: string;
  title: 'Attend' | 'Attended' | 'Pending' | 'Missed';
};

const ScanCard = ({ code, title }: ScanCardProp) => {
  const cardData: any = {
    attend: {
      desc: 'You are yet to attend this class',
      bg: 'bg-[#d3e2f5]',
      border: 'border-[#8bbbf3]',
      icon: <AttendIcon />,
    },
    attended: {
      desc: 'You have successfully attended this class',
      bg: 'bg-[#e6fdef]',
      border: 'border-[#7feea6]',
      icon: <AttendedIcon />,
    },
    pending: {
      desc: 'click for signing out scanning for the class',
      bg: 'bg-[#f9ebdb]',
      border: 'border-[#f8c68e]',
      icon: <PendingIcon />,
    },
    missed: {
      desc: 'You did not attend this class',
      bg: 'bg-[#f9dfdf]',
      border: 'border-[#e9abab]',
      icon: <MissedIcon />,
    },
  };
  const data = cardData[title.toLowerCase()];
  return (
    <View
      className={`p-3 ${data.bg}  border ${data.border} rounded-lg flex flex-row mb-5 items-center`}
    >
      <View className="flex-1 flex flex-row items-center gap-3">
        <View className="rounded-full bg-white border border-[#EDEDF3] p-4">
          <Text className="text-[8px] font-bold">{code.split(' ')[0]}</Text>
          <Text className="text-[8px] font-bold">{code.split(' ')[1]}</Text>
        </View>
        <View>
          <Text className="text-[11px] font-medium mb-1">{title}</Text>
          <Text className="text-[8px] font-medium text-[#9292B4]">
            {data.desc}
          </Text>
        </View>
      </View>
      {data.icon}
    </View>
  );
};

const Home = () => {
  const [date, setDate] = useState('Today');
  const dates = ['Today', 'This Week'];
  const today: ScanCardProp[] = [
    { code: 'CIS 442', title: 'Pending' },
    { code: 'ISS 416', title: 'Attend' },
    { code: 'ISC 411', title: 'Attend' },
    { code: 'CSS 433', title: 'Attended' },
  ];
  const thisWeek: ScanCardProp[] = [
    { code: 'CIS 442', title: 'Attended' },
    { code: 'CIS 442', title: 'Attended' },
    { code: 'ISC 411', title: 'Missed' },
    { code: 'CIS 442', title: 'Attended' },
    { code: 'ISC 411', title: 'Missed' },
    { code: 'CIS 442', title: 'Attended' },
    { code: 'CIS 442', title: 'Attended' },
  ];

  return (
    <View className="p-5 pt-12 bg-white flex-1">
      <View className="flex flex-row justify-between">
        <View className="gap-3">
          <Text className="font-bold text-lg">Scan</Text>
        </View>
        <Image source={require('../../assets/smallAvatar.png')} />
      </View>
      <View className="flex flex-row gap-3 my-5">
        {dates.map((item) => (
          <Pressable
            key={item}
            onPress={() => setDate(item)}
            className={`rounded-full py-2 px-4 border border-[#B0B0C9] ${
              date === item && 'border-0 bg-[#E9ECFB]'
            }`}
          >
            <Text className="text-[8px] font-semibold">{item}</Text>
          </Pressable>
        ))}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {date === 'Today' && (
          <View>
            {today.map((item, index) => (
              <ScanCard key={index} {...item} />
            ))}
          </View>
        )}
        {date === 'This Week' && (
          <View>
            {thisWeek.map((item, index) => (
              <ScanCard key={index} {...item} />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
