import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import CustomColor from '../components/CustomColor';

const CustomColorScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  return(
    <View>
      <CustomColor
        color='Red'
        onIncrease={() => setRed(red + 10)}
        onDecrease={() => setRed(red - 10)}
      />
      <CustomColor
        color='Green'
        onIncrease={() => setGreen(green + 10)}
        onDecrease={() => setGreen(green - 10)}
      />
      <CustomColor
        color='Blue'
        onIncrease={() => setBlue(blue + 10)}
        onDecrease={() => setBlue(blue - 10)}
      />

      <Text style={{textAlign: 'center', fontSize: 20}}>{`rgb(${red}, ${green}, ${blue})`}</Text>

      <View style={{
        height: 100,
        width: 100,
        borderWidth: 2,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }} />
    </View>
  );
};



export default CustomColorScreen;