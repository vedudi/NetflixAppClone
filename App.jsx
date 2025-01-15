import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import './global.css';
import AppNavigation from './src/navigations/AppNavigation';
import AppProvider from './src/providers/AppProvider';

const App = () => {
  return (
    <AppProvider style={{flex: 1}}>
      <AppNavigation />
    </AppProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
