import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const TabItem = ({ route, navigation, descriptor }) => {
  const { options } = descriptor;
  const label = options.tabBarLabel || options.title || route.name;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.jumpTo(route.name);
      }}
    >
      <Text>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;
