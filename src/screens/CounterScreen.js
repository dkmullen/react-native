import React, { useReducer, useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { installReactHook } from 'react-native/Libraries/Performance/Systrace';
import { Component } from 'react/cjs/react.production.min';

// This is an example of using useReducer installReactHook, but this counter would
// be better to use useState, as in the old counter Component

const reducer = (state, action) => {
  // state === { count: num }
  // action === { type: change_counter, payload: 1 || -1}
  return { ...state, counter: state.counter + action.payload };
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const counter = state.counter;
  console.log(counter);

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ type: 'change_counter', payload: 1 });
        }}
      ></Button>
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({ type: 'change_counter', payload: -1 });
        }}
      ></Button>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
