import React, { useReducer } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import CustomColor from '../components/CustomColor';

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  switch (action.colorToChange) {
    case 'red':
      return {...state, red: state.red + action.amount };
    case 'green':
      return {...state, green: state.green + action.amount };
    case 'blue':
      return {...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const CustomColorScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return(
    <View>
      <CustomColor
        color='Red'
        onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}
        onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}
      />
      <CustomColor
        color='Green'
        onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT}) }
        onDecrease={() => dispatch({colorToChange: 'green', amount: -1 *COLOR_INCREMENT})}
      />
      <CustomColor
        color='Blue'
        onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT}) }
        onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}
      />

      <Text style={{textAlign: 'center', fontSize: 20}}>{`rgb(${state.red}, ${state.green}, ${state.blue})`}</Text>

      <View style={{
        height: 500,
        width: 500,
        borderWidth: 2,
        backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
      }} />
    </View>
  );
};



export default CustomColorScreen;