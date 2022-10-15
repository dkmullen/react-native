import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
  // Using array destructuring, we declare a new counter
  // with a val of 0
  // When state changes, CounterScreen reruns
  // All children are re-rendered
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          setCounter(counter + 1);
        }}
      ></Button>
      <Button
        title='Decrease'
        onPress={() => {
          setCounter(counter - 1);
        }}
      ></Button>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
