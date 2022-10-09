import React, { useState } from 'react'; // useState is a hook, to add functionality
import { StyleSheet, View, Button, Text } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`}></Button>
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`}></Button>
    </View>
  );
};

// const randomRgb = () => {
//   // Between 0 and 255
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   return `rgb(${red},${green},${blue})`;
// };

const styles = StyleSheet.create({});
export default ColorCounter;
