import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = ({ navigator }) => (
    <View
        style={styles}
    >
        <Text>
            Home Page
        </Text>
    </View>
);


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Home;