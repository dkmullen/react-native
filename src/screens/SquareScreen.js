import React, { useState } from 'react'; // useState is a hook, to add functionality
import { StyleSheet, View, Button, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0); // 0 = initial value
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const n = 15;

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        return red + change > 255 || red + change < 0
          ? null
          : setRed(red + change);
      case 'green':
        return green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
      case 'blue':
        return blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', n)}
        onDecrease={() => setColor('red', -1 * n)}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => setColor('green', n)}
        onDecrease={() => setColor('green', -1 * n)}
        color='Green'
      />
      <ColorCounter
        onIncrease={() => setColor('blue', n)}
        onDecrease={() => setColor('blue', -1 * n)}
        color='Blue'
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
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
export default SquareScreen;
