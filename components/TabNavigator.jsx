import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EntryScreen from '../screens/Entry';
import CapsulesScreen from '../screens/Capsules';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Entry"
      component={EntryScreen}
    />
    <Tab.Screen
      name="Capsules"
      component={CapsulesScreen}
    />
  </Tab.Navigator>
);

export default TabNavigator;
