import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BoxScreen = () => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.redStyle}>Child #1</Text>
      <Text style={styles.greenStyle}>Child #2</Text>
      <Text style={styles.blueStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    height: 200
  },
  redStyle: {
    borderWidth: 3,
    borderColor: 'red',
    margin: 5
  },
  greenStyle: {
    borderWidth: 3,
    borderColor: 'green',
    margin: 5
  },
  blueStyle: {
    borderWidth: 3,
    borderColor: 'blue',
    margin: 5
  }
});

export default BoxScreen;