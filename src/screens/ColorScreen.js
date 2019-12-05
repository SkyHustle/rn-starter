import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorScreen = () => {
  const [colors, addColor] = useState([]);

  return(
    <View>
      <Button
        title='Add Color'
        onPress={() => {
          addColor(colors.push('red'))
        }}
      />
      <Text>{colors}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;