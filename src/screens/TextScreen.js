import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  const validatePassword = () => {
    if (password.length < 6) {
      return 'Password must be longer than 5 characters';
    }
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
      <Text>{validatePassword()}</Text>
      <Text>{password}</Text>
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