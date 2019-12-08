import React, {useReducer} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const reducer = (state, action) => {
  // state = {count:0}
  //action = {type: increase_count || decrease_count, payload: number}
  console.log(action)
};

const CounterScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, {count:0})

  return(
    <View>
      <Button
        title='Increase'
        onPress={() => { dispatch({ type:'increase_count', payload: 1}) }}
      />
      <Button
        title='Decrease'
        onPress={() => {console.log('Decrease')}}
      />
      <Text style={{textAlign: 'center'}}>Current Count:</Text>
    </View>
  );
};

export default CounterScreenReducer;