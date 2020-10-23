import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  AntDesign,
  Entypo,
  FontAwesome,
  Ionicons,
} from '@expo/vector-icons';

import StatsScreen from '../../screens/Stats';
import EntryScreen from '../../screens/Entry';
import CapsulesScreen from '../../screens/Capsules';
import CalendarScreen from '../../screens/Calendar';

import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Entry"
    tabBar={TabBar}
    backBehavior="history"
    screenOptions={{
      tabBarAccessibilityLabel: 'haha',
    }}
  >
    <Tab.Screen
      name="Stats"
      component={StatsScreen}
      options={{
        tabBarIcon: ({ size, color }) => <Ionicons name="md-stats" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Entry"
      component={EntryScreen}
      options={{
        tabBarIcon: ({ size, color }) => <AntDesign name="clockcircle" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Calendar"
      component={CalendarScreen}
      options={{
        tabBarIcon: ({ size, color }) => <FontAwesome name="calendar" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Capsules"
      component={CapsulesScreen}
      options={{
        tabBarIcon: ({ size, color }) => <Entypo name="mail" size={size} color={color} />,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
