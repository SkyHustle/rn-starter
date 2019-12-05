import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

const ColorScreen = () => {
  return(
    <View>
      <Button
        title='Add A Color'
      />
      <View style={{ height: 100, width: 100, backgroundColor: 'rgb(0, 255, 0)'}} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;