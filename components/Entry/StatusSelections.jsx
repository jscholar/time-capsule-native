import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import thumbsUp from '../../assets/thumbs-up.png';
import thumbsDown from '../../assets/thumbs-down.png';

const options = [
  {
    imgSrc: thumbsDown,
    name: 'Bad',
  },
  {
    imgSrc: thumbsUp,
    name: 'Good',
  },
];

const styles = StyleSheet.create({
  'status-selection': {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

const StatusSelection = ({ selectStatus }) => (
  <View style={styles['status-selection']}>
    {options.map(({ name, imgSrc }) => (
      <TouchableOpacity
        key={name}
        onPress={() => selectStatus(name)}
      >
        <Image
          source={imgSrc}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </TouchableOpacity>
    ))}
  </View>
);

export default StatusSelection;
