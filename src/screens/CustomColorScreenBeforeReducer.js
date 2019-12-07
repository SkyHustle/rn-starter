import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import CustomColor from '../components/CustomColor';

const COLOR_INCREMENT = 10;

const CustomColorScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
      default:
        return;
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
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
      />
      <CustomColor
        color='Blue'
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
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