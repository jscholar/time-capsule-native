/* eslint-disable react/jsx-filename-extension */

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <TabNavigator />
    </NavigationContainer>
  );
}
