import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>Boss Home Screen</Text>
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
      <Button
        title="Counter Screen"
        onPress={() =>  navigation.navigate('Counter')}
      />
      <Button
        title="Color Screen"
        onPress={() =>  navigation.navigate('Color')}
      />
      <Button
        title="Custom Color Screen"
        onPress={() =>  navigation.navigate('CustomColor')}
      />
      <Button
        title="Counter Using Reducer"
        onPress={() =>  navigation.navigate('CounterReducer')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default HomeScreen;
