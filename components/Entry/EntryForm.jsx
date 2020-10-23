import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import StatusSelections from './StatusSelections';

const styles = StyleSheet.create({
  entry: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const EntryForm = () => {
  const [entryData, setEntryData] = useState({
    status: null,
    descriptions: null,
  });
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.entry, {
      width,
    }]}
    >
      <View>
        <Text>How are you?</Text>
      </View>
      <StatusSelections
        selectStatus={(status) => {
          setEntryData({ ...entryData, status });
        }}
        currentStatus={entryData.status}
      />
      <View>
        <Text>One word</Text>
      </View>

    </View>
  );
};

export default EntryForm;
