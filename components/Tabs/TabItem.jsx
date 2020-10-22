import React from 'react';
import { TouchableOpacity } from 'react-native';

const TabItem = ({
  route,
  navigation,
  descriptor,
  focused,
}) => {
  const { options } = descriptor;
  const { tabBarIcon: Icon } = options;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.jumpTo(route.name);
      }}
    >
      <Icon size={focused && route.name === 'Entry' ? 52 : 24} />
    </TouchableOpacity>
  );
};

export default TabItem;
