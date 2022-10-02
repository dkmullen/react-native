import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// A component is a function that returns JSX
const ComponentsScreen = () => {
  const name = 'Dennis Mullen';

  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with React Native!</Text>
      <Text style={styles.regularStyle}>My name is {name}</Text>
    </View>
  );
};

// Create stylesheet
const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
    color: 'teal',
  },
  regularStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
