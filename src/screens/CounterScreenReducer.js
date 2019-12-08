import React, {useReducer} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const reducer = (state, action) => {
  // state = {count:0}
  //action = {type: increase_count || decrease_count, payload: number}
  console.log(action)
  switch (action.type) {
    case 'increase_count':
      return {...state, count: state.count + action.payload};
    case 'decrease_count':
      return {...state, count: state.count + action.payload}
    default:
      return state
  };
};

const CounterScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, {count:0})
  const {count} = state

  return(
    <View>
      <Button
        title='Increase'
        onPress={() => { dispatch({ type:'increase_count', payload: 1}) }}
      />
      <Button
        title='Decrease'
        onPress={() => { dispatch({ type:'decrease_count', payload: -1}) }}
      />
      <Text style={{textAlign: 'center'}}>Current Count: {count}</Text>
    </View>
  );
};

export default CounterScreenReducer;