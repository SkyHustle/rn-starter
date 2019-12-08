import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Input from '../components/Input';

const TextScreen = () => {
  const [text, setText] = useState('Default');

  return(
    <View>
      <Input />
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TextScreen;