import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const BackAndFavorite = ({isAbsolute}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className={`flex-row justify-between items-center my-5  mx-10 z-20 ${
        isAbsolute && 'absolute'
      } w-[360px]`}>
      <TouchableOpacity
        className="bg-[#eab308] p-1 rounded-xl"
        onPress={() => navigation.goBack()}>
        <Icon name="left" color="white" size={25} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="heart" color="white" size={25} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BackAndFavorite;

const styles = StyleSheet.create({});
