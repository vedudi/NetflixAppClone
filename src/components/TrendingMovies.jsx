import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {GetTrendingMovies} from '../app/actions/movieActions';

const TrendingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    GetTrendingMovies();
  }, [dispatch]);
  return (
    <View>
      <Text>TrendingMovies</Text>
    </View>
  );
};

export default TrendingMovies;

const styles = StyleSheet.create({});
