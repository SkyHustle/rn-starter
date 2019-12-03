import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = { color: 'Blue' }

  return (
      <View>
         <Text style={styles.textStyle}>This is the components Screen</Text>
         <Text>{greeting.color}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;