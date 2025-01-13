import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {AppScreens} from './AppScreens';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false,}}
      initialRouteName={AppScreens.Home}>
      <Stack.Screen name={AppScreens.Movie} component={MovieScreen} />
      <Stack.Screen name={AppScreens.Person} component={PersonScreen} />
      <Stack.Screen name={AppScreens.Home} component={HomeScreen} />
      <Stack.Screen name={AppScreens.Search} component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
