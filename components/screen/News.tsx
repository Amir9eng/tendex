import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import InputField from '@/components/input-field';
import ArticleHeader from '@/components/ArticleHeader';
import ArticleTile from '@/components/ArticleTile';
import ModalEl from '@/components/ModalEl';

const articles = [
  'How to calculate session CGPA',
  'How to utilize ttendr for attendance',
];

const News = () => {
  const [selected, setSelected] = useState('');
  return (
    <View className="p-4 pt-16">
      <Text className="text-[32px] font-bold">Discover latest school news</Text>
      <InputField placeholder="Search for news" label="" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-sm font-bold my-4">Today's Article</Text>
        <Pressable
          onPress={() =>
            setSelected(
              'Fresher orientation on activities of school and lectures'
            )
          }
        >
          <ArticleHeader text="Fresher orientation on activities of school and lectures" />
        </Pressable>
        <View className="w-full h-[1px] bg-black my-4" />
        <View className="flex flex-row items-center justify-between">
          <Text className="font-semibold text-xs">More Articles</Text>
          <View className="bg-[#e0e4f6] rounded-full py-1 px-2 flex flex-row items-center space-x-2">
            <Text className="text-[#161682] text-[8px]">View all</Text>
          </View>
        </View>
        {articles.map((article) => (
          <Pressable key={article} onPress={() => setSelected(article)}>
            <ArticleTile text={article} />
          </Pressable>
        ))}
      </ScrollView>
      {selected && (
        <ModalEl visible>
          <View className="flex-1 pt-16 px-4">
            <View className="flex flex-row justify-between mb-4">
              <Pressable onPress={() => setSelected('')}>
                <Image source={require('../../assets/arrow-left-black.png')} />
              </Pressable>
            </View>
            <ArticleHeader text={selected} reverse />
            <Text className="text-[11px] mt-8">
              University of Ilorin Welcomes Freshers Ilorin, May 26, 2024 — The
              University of Ilorin's annual orientation provided new students
              with crucial information on academics, campus resources, and
              extracurricular activities. Vice-Chancellor Professor Wahab
              Egbewole emphasized academic and personal growth. Faculty outlined
              course details, while support services covered mental health and
              accommodation. Student organizations promoted extracurricular
              involvement. A campus tour helped freshers familiarize themselves
              with key facilities, setting the stage for a successful academic
              year. Leaders from various student organizations encouraged
              freshers to participate in extracurricular activities. The event
              concluded with a campus tour, helping students familiarize
              themselves with key facilities. The orientation received positive
              feedback, preparing students for a successful start to their
              academic journey
            </Text>
          </View>
        </ModalEl>
      )}
    </View>
  );
};

export default News;
