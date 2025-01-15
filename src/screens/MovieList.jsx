import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MovieListItem from '../components/MovieListItem';

const MovieList = ({title, data}) => {
  return (
    <View className="my-8 space-y-5">
      <View className="flex-row mx-4 justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        <TouchableOpacity>
          <Text className="text-[#eab300] text-lg">See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        data={data}
        renderItem={({item}) => <MovieListItem movie={item} key={item.id} />}
      />
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({});
