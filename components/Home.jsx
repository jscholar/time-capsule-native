import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home = () => (
  <View
    style={styles}
  >
    <Text>
      Home Page
    </Text>
  </View>
);

export default Home;
