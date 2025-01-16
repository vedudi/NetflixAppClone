import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const PersonListItem = ({person}) => {
  return (
    <TouchableOpacity className="mr-4 items-center">
      <View className="rounded-full w-20 h-20 overflow-hidden items-center border border-neutral-500">
        <Image
          className="w-20 h-20 rounded-xl"
          source={{
            uri: `https://image.tmdb.org/t/p/w500${person.profile_path}`,
          }}
        />
      </View>
      <Text className="text-white text-xs mt-1">
        {person?.character?.length > 10
          ? person?.character?.slice(0, 10) + '...'
          : person?.character}
      </Text>
      <Text className="text-neutral-400 text-xs mt-1">
        {person?.original_name?.length > 10
          ? person?.original_name?.slice(0, 10) + '...'
          : person?.original_name}
      </Text>
    </TouchableOpacity>
  );
};

export default PersonListItem;

const styles = StyleSheet.create({});
