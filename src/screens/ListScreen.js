import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1', age: 30 },
    { name: 'Friend 2', age: 44 },
    { name: 'Friend 3', age: 56 },
    { name: 'Friend 4', age: 19 },
    { name: 'Friend 5', age: 33 },
    { name: 'Friend 6', age: 45 },
    { name: 'Friend 7', age: 48 },
    { name: 'Friend 8', age: 50 },
  ];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}

      // list needs a unique key for each item, which in this case
      // can be the name. keyEx... is a built in method for this
      keyExtractor={(friend) => friend.name}
      data={friends}
      // Destructure to pull item property off
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
