import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigations/AppScreens';

const MovieListItem = ({movie}) => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(AppScreens.Movie, {id: movie.id})}>
      <View className="mr-4 space-y-5">
        <Image
          className="rounded-3xl"
          style={{width: width * 0.33, height: height * 0.22}}
          source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}
        />
        <Text className="text-neutral-300 ml-2">
          {' '}
          {movie.title?.length > 18
            ? movie.title.slice(0, 18) + '...'
            : movie.title}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieListItem;

const styles = StyleSheet.create({});
