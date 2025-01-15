import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigations/AppScreens';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  console.log(searchText);

  return (
    <SafeAreaView className="bg-neutral-800 flex-1 py-10">
      <View className="mx-4 border border-neutral-500 rounded-full flex-row justify-between mb-3">
        <TextInput
          onChangeText={setSearchText}
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          className="text-white tracking-wider font-semibold py-2 px-6"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(AppScreens.Home)}
          className=" bg-neutral-700 rounded-full p-2 m-1 ">
          <Icon name="close" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View className=" m-auto">
        <Image
          source={require('./../images/movieTime.png')}
          className="w-96 h-96"
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
