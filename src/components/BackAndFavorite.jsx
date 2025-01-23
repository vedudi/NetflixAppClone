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
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from '../app/slices/favoriteSlice';

const BackAndFavorite = ({isAbsolute, movie}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };
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
      <TouchableOpacity onPress={handleFavorite}>
        <Icon
          name="heart"
          color={isFavorite ? 'yellowgreen' : '#fff'}
          size={25}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BackAndFavorite;

const styles = StyleSheet.create({});
