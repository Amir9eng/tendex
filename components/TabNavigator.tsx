import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './screen/Home';
import Calendar from './screen/Calendar';
import { BottomTabParamsList } from '@/utils/types';
import News from './screen/News';
import Settings from './screen/Settings';
import QrCode from './screen/QrCode';
import HomeIcon from './icons/HomeIcon';
import CalendarIcon from './icons/CalendarIcon';
import NewsIcon from './icons/NewsIcon';
import SettingsIcon from './icons/SettingsIcon';
import QrCodeIcon from './icons/QrCodeIcon';
import Home from './screen/Home';

const Tab = createBottomTabNavigator<BottomTabParamsList>();

const TabNavigator = () => {
  const { Navigator, Screen } = Tab;
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: '#667BF1',
        headerShown: false,
        tabBarStyle: { height: 100, paddingBottom: 0 },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <HomeIcon focused={focused ? '#667BF1' : ''} />
          ),
        }}
      />
      <Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <CalendarIcon focused={focused ? '#667BF1' : ''} />
          ),
        }}
      />
      <Screen
        name="QrCode"
        component={QrCode}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <QrCodeIcon />,
        }}
      />
      <Screen
        name="News"
        component={News}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <NewsIcon focused={focused ? '#667BF1' : ''} />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <SettingsIcon focused={focused ? '#667BF1' : ''} />
          ),
        }}
      />
    </Navigator>
  );
};

export default TabNavigator;
