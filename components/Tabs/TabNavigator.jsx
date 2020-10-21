import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EntryScreen from '../../screens/Entry';
import CapsulesScreen from '../../screens/Capsules';
import CalendarScreen from '../../screens/Calendar';

import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBar={TabBar}
    backBehavior="history"
  >
    <Tab.Screen
      name="Entry"
      component={EntryScreen}
    />
    <Tab.Screen
      name="Calendar"
      component={CalendarScreen}
    />
    <Tab.Screen
      name="Capsules"
      component={CapsulesScreen}
    />
  </Tab.Navigator>
);

export default TabNavigator;
