import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BoxScreen = () => {
  return(
    <View style={styles.parentStyle}>
      <Text style={styles.redStyle}>Child #1</Text>
      <Text style={styles.greenStyle}>Child #2</Text>
      <Text style={styles.blueStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 10,
    borderColor: 'purple',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100%'
  },
  redStyle: {
    borderWidth: 3,
    borderColor: 'red',
    margin: 5
  },
  greenStyle: {
    borderWidth: 3,
    borderColor: 'green',
    margin: 5,
    // flex: 1,
    alignSelf: 'flex-start',
    // ...StyleSheet.absoluteFillObject
  },
  blueStyle: {
    borderWidth: 3,
    borderColor: 'blue',
    margin: 5
  }
});

export default BoxScreen;