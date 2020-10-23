import React from 'react';
import { View, useWindowDimensions } from 'react-native';

import EntryForm from '../components/Entry/EntryForm';

const Entry = () => (
  <View
    style={{
      height: useWindowDimensions().height,
      backgroundColor: 'rgb(168, 151, 167)',
    }}
  >
    <EntryForm />
  </View>
);

export default Entry;
