import {
  CryptoIcon,
  HomeIcon,
  InvestIcon,
  LifestyleIcon,
  TransfersIcon,
} from '@/components/TabIcons';
import Colors from '@/constants/Colors';
import { Tabs } from 'expo-router';
import React from 'react';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tabs.Screen
        name='invest'
        options={{
          title: 'Invest',
          tabBarIcon: InvestIcon,
        }}
      />
      <Tabs.Screen
        name='transfers'
        options={{
          title: 'Transfers',
          tabBarIcon: TransfersIcon,
        }}
      />
      <Tabs.Screen
        name='lifestyle'
        options={{
          title: 'Lifestyle',
          tabBarIcon: LifestyleIcon,
        }}
      />
      <Tabs.Screen
        name='crypto'
        options={{
          title: 'Crypto',
          tabBarIcon: CryptoIcon,
        }}
      />
    </Tabs>
  );
};

export default Layout;
