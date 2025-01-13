import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/native';
import { AppScreens } from '../navigations/AppScreens';

const HomeScreen = () => {
  const navigation=useNavigation()
  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View className='flex-row justify-between items-center px-4'>
        <Icon name="menuunfold" size={30} color="#fff" />
        <Logo />
        <TouchableOpacity onPress={()=>navigation.navigate(AppScreens.Search)}>
          <Icon name="search1" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
