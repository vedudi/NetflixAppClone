import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {Store} from '../app/store';

const AppProvider = ({children}) => {
  return <Provider store={Store}> {children} </Provider>;
};

export default AppProvider;

const styles = StyleSheet.create({});
