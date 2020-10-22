/* eslint-disable react/jsx-filename-extension */

import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './components/Tabs/TabNavigator';

import { initTable } from './database/api';

export default function App() {
  useEffect(() => {
    initTable();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
