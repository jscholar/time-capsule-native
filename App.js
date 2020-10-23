/* eslint-disable react/jsx-filename-extension */

import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StatusBarPadder from './components/UI/StatusBarPadder';
import TabNavigator from './components/Tabs/TabNavigator';

import { initTable } from './database/api';

export default function App() {
  useEffect(() => {
    initTable();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StatusBarPadder />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </>
  );
}
