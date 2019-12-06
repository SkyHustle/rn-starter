import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const CustomColor = ({ color, onIncrease, onDecrease }) => {
  return(
    <View>
      <Button
        title={`More ${color}`}
        onPress={() => onIncrease()}
      />
      <Button
        title={`Less ${color}`}
        onPress={() => onDecrease()}
      />
    </View>
  );
};


export default CustomColor;