import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Input = () => {
  return(
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default Input;