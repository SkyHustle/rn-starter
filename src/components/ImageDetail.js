import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({title}) => {
  return(
    <View>
      <Text>Image Detail Component with {title}</Text>
      <Image source={require('../../assets/beach.jpg')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;