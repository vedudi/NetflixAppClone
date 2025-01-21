import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigations/AppScreens';
import {useDispatch, useSelector} from 'react-redux';
import {GetSearchMovie} from '../app/actions/movieActions';
import {getSearchMovieState} from '../app/movieSelector';
import MovieListItem from '../components/MovieListItem';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const searchMovies = useSelector(getSearchMovieState());

  useEffect(() => {
    dispatch(GetSearchMovie(searchText));
  }, [searchText, dispatch]);
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
      {searchMovies?.length > 0 && (
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 15, paddingBottom: 30}}>
          <Text className="text-white font-semibold ml-1">
            Result Length: {searchMovies?.length}{' '}
          </Text>
          <View className="flex-row flex-wrap justify-between px-5">
            {searchMovies.map((movie, index) => (
              <MovieListItem searchPage movie={movie} key={index} />
            ))}
          </View>
        </ScrollView>
      )}
      {searchMovies?.length === 0 && (
        <View className=" m-auto">
          <Image
            source={require('./../images/movieTime.png')}
            className="w-96 h-96"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
