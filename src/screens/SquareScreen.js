import React, { useReducer } from 'react'; // useReducer is a hook, to add functionality
import { StyleSheet, View, Button, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === {red: num, green: num, blue: num}
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
  // type and payload are convention - these could be 'colorToChange' and 'amount'
  switch (action.type) {
    case 'change_red':
      // ...state is same as red: 0, green: 0, blue: 0
      // We never modify state, only return a new obj to be used as state
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state // Reducer HAS to return something, can't just return
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  // With useReducer, this component re-renders whenever state changes
  // dispatch could be named runReducer
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
        color='Red'
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
        color='Green'
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
        }
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
