import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>Boss Home Screen!!!</Text>
      <Button
        title="Go To Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go To List"
        onPress={() =>  navigation.navigate('List')}
      />
      <Button
        title="Image Screen"
        onPress={() =>  navigation.navigate('Image')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default HomeScreen;
