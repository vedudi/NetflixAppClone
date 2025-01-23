import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectFavorites} from '../app/slices/favoriteSlice';
import FavoriteCard from '../components/FavoriteCard';

const FavoritesScreen = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <Text className="text-[20px] text-center text-white my-4">
        FavoritesScreen
      </Text>
      <FlatList
        data={favorites}
        renderItem={({item}) => <FavoriteCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
