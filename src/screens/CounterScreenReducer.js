import React, {useReducer} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const CounterScreenReducer = () => {
  return(
    <View>
      <Button title='Increase' />
      <Button title='Decrease' />
      <Text>Current Count:</Text>
    </View>
  );
}

export default CounterScreenReducer;