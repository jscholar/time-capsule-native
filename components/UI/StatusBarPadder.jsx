import React from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';

const StatusBarPadder = () => (
  <View style={{ height: Constants.statusBarHeight, backgroundColor: 'rgb(192, 149, 159)' }} />
);

export default StatusBarPadder;
