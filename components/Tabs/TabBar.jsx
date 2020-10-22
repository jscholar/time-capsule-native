import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import TabItem from './TabItem';

const TabBar = ({ state, descriptors, navigation }) => (
  <View
    style={{
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    }}
  >
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Text>
        Back
      </Text>
    </TouchableOpacity>
    { state.routes.map((route, index) => (
      <TabItem
        focused={state.index === index}
        navigation={navigation}
        key={route.key}
        route={route}
        descriptor={descriptors[route.key]}
      />
    ))}
  </View>
);

export default TabBar;
