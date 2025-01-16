import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PersonListItem from './PersonListItem';

const Cast = ({data}) => {
  return (
    <View>
      <Text className="text-white">Cast</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <PersonListItem person={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        contentContainerStyle={{paddingHorizontal: 15}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Cast;

const styles = StyleSheet.create({});
