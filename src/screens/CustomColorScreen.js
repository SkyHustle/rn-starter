import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

const CustomColorScreen = () => {
  const [color, adjustColor] = useState('rgb(50,0,0)');

  return(
    <View>
      <Button
        title='More Red'
        onPress={() => {
          adjustColor('rgb(150,0,0)');
        }}
      />
      <Button
        title='Less Red'
        onPress={() => {
          adjustColor('rgb(50,0,0)');
        }}
      />
      <View style={{ height: 100, width: 100, backgroundColor: color }} />
    </View>
  );
};

// const randomRgb = () => {
//   const red = Math.floor(Math.random() * 256)
//   const green = Math.floor(Math.random() * 256)
//   const blue = Math.floor(Math.random() * 256)

//   return `rgb(${red}, ${green}, ${blue})`
// }


export default CustomColorScreen;