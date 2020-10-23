import React from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';

const StatusBarPadder = () => (
  <View style={{ height: Constants.statusBarHeight }} />
);

export default StatusBarPadder;
