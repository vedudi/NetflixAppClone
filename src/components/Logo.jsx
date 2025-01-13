import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <Image
      style={{width: 200, height: 50}}
      source={{
        uri: 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
      }}
    />
  );
};

export default Logo;

const styles = StyleSheet.create({});
