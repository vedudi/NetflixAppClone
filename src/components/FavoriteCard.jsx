import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {removeFavorite} from '../app/slices/favoriteSlice';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

const FavoriteCard = ({item}) => {
  const dispatch = useDispatch();
  return (
    <View className="flex-row justify-between mx-4 items-center my-5">
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`,
        }}
        className="w-20 h-20 rounded-md"
      />
      <View>
        <Text className="text-neutral-400 text-center font-semibold text-base">
          {item?.title}
        </Text>
        <Text className="text-neutral-400 text-center font-semibold text-base">
          {item?.status} | {item?.release_date?.split('-')[0]} | 
          {item?.runtime} min
        </Text>
      </View>

      <TouchableOpacity onPress={() => dispatch(removeFavorite(item))}>
        <Icon name="heart" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({});
