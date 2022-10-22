import React, { useState } from 'react'; // useState is a hook, to add functionality
import { StyleSheet, View, Text } from 'react-native';

const BoxExercise = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle}></View>
      <View style={styles.textTwoStyle}></View>
      <View style={styles.textThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    // borderWidth: 3,
    // borderColor: 'black',
    // alignItems: 'center', // stretch is default
    flexDirection: 'row', // column is default
    height: 100,
    justifyContent: 'space-around',
  },
  textOneStyle: {
    backgroundColor: 'red',
    height: 50,
    width: 50,

    // marginVertical: 20,
    // marginHorizontal: 20,
    // margin: 20,
  },
  textTwoStyle: {
    backgroundColor: 'green',
    // flex: 1,
    height: 50,
    width: 50,
    top: 50,
  },
  textThreeStyle: {
    backgroundColor: 'blue',
    height: 50,
    width: 50,
  },
});

export default BoxExercise;
