import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  const validatePassword = () => {
    return password.length < 6 ? <Text>Password must be longer than 5 characters</Text> : null
  }

  return(
    <View>
      <Text style={{fontSize: 20}}>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorret={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {validatePassword()}
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

export default TextScreen;