import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>Boss Home Screen!!!</Text>
      <Button
        title="Go To Components Demo"
        onPress={() => props.navigation.navigate('Components')}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default HomeScreen;
