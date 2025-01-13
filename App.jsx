import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import './global.css';
import AppNavigation from './src/navigations/AppNavigation';

const App = () => {
  return (
    <View style={{flex:1}}>
      <AppNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
