import React, { useState } from 'react'; // useState is a hook, to add functionality
import { StyleSheet, View, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  // Using array destructuring, we declare a new counter
  // with a val of 0
  // When state changes, CounterScreen reruns
  // All children are re-rendered
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title='Add a Color'
        onPress={() => {
          // copy the colors array and add a new color
          // we never change the state var, ie, the array colors
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        // item = some element out of our colors array
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  // Between 0 and 255
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});
export default ColorScreen;
