import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const CustomColorScreen = () => {
  const [color, adjustColor] = useState({red: 0, green: 0, blue: 0});

  return(
    <View>
      <Button
        title='More Red'
        onPress={() => {
          adjustColor(handleRed(color, 'more'));
        }}
      />
      <Button
        title='Less Red'
        onPress={() => {
          adjustColor(handleRed(color, 'less'));
        }}
      />
      <Text style={{textAlign: 'center', fontSize: 20}}>{`rgb(${color.red.toString()}, ${color.green.toString()}, ${color.blue.toString()})`}</Text>
      <View style={{
        height: 100,
        width: 100,
        borderWidth: 2,
        backgroundColor: `rgb(${color.red.toString()}, ${color.green.toString()}, ${color.blue.toString()})`
      }} />
    </View>
  );
};

const handleRed = (color, adjustment) => {
  let updatedColor = color

  if (adjustment === 'more') {
    return updatedColor = {red: updatedColor.red + 20, green: 0, blue: 0}
  } else if (adjustment === 'less') {
    return updatedColor = {red: updatedColor.red - 20, green: 0, blue: 0}
  }
}


export default CustomColorScreen;