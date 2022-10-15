import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

// props object and its stack naviagtor is available to us from App js
// here we use destructing to get just 'navigation' from props
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hey now!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Go to Components Demo'
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title='Go to List Demo'
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title='Go to Image Demo'
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title='Go to Counter Demo'
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title='Go to Color Demo'
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title='Go to Square Demo'
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title='Go to Text Demo'
      />
      {/* TouchableOpacity is used to make pics, icons and other objects reactive */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
