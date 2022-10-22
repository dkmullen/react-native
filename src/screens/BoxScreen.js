import React, { useState } from 'react'; // useState is a hook, to add functionality
import { StyleSheet, View, Text } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    // alignItems: 'center', // stretch is default
    flexDirection: 'row', // column is default
    height: 200,
    // justifyContent: 'space-around',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // marginVertical: 20,
    // marginHorizontal: 20,
    // margin: 20,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 1,
    ...StyleSheet.absoluteFillObject, // same as position absolute, top 0 left 0 etc
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'center', // overides alignItems for this one item
  },
});

export default BoxScreen;
