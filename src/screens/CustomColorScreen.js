import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import CustomColor from '../components/CustomColor';

const COLOR_INCREMENT = 10;

const CustomColorScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  const setColor = (color, change) => {
    if(color === 'red') {
      if(red + change > 255 || red + change < 0) {
        return;
      } else {
        setRed(red + change);
      }
    }
  };

  return(
    <View>
      <CustomColor
        color='Red'
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
      />
      <CustomColor
        color='Green'
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
      />
      <CustomColor
        color='Blue'
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
      />

      <Text style={{textAlign: 'center', fontSize: 20}}>{`rgb(${red}, ${green}, ${blue})`}</Text>

      <View style={{
        height: 500,
        width: 500,
        borderWidth: 2,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }} />
    </View>
  );
};



export default CustomColorScreen;