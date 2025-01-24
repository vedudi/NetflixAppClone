import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectFavorites} from '../app/slices/favoriteSlice';
import FavoriteCard from '../components/FavoriteCard';
import BackAndFavorite from '../components/BackAndFavorite';

const FavoritesScreen = () => {
  const {width, height} = Dimensions.get('window');
  const favorites = useSelector(selectFavorites);
  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <View className="flex-row items-center justify-around">
        <View style={{width: width * 0.1}}>
          <BackAndFavorite showHeart={false} />
        </View>
        <Text
          style={{width: width * 0.9}}
          className="text-[20px] text-center text-white my-4">
          FavoritesScreen
        </Text>
      </View>
      <FlatList
        data={favorites}
        renderItem={({item}) => <FavoriteCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
