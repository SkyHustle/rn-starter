import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1'},
    {name: 'Friend #2'},
    {name: 'Friend #3'},
    {name: 'Friend #4'},
    {name: 'Friend #5'}
  ];

  return(
    <FlatList
      data={friends}
      renderItem={( {item} ) => {
        return (
          <Text key={item.name}>{item.name}</Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;