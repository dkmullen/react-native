import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const TextScreen = () => {
  // name is set from parent (TextScreen) to child
  // setName also comes from parent, is a callback to make changes
  const [name, setName] = useState('');
  return (
    <View>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
      {name && name.length < 5 ? (
        <Text>Entry must be at least 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TextScreen;
