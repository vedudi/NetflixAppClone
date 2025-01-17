import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetTrendingMovies} from '../app/actions/movieActions';
import {getTrendingState} from '../app/movieSelector';
// import Carousel from 'react-native-snap-carousel';

const TrendingMovies = () => {
  const {width, height} = Dimensions.get('window');
  const dispatch = useDispatch();
  useEffect(() => {
    GetTrendingMovies();
  }, [dispatch]);
  const trendingMovies = useSelector(getTrendingState());
  return (
    <View>
      {/* <Carousel
        data={trendingMovies}
        renderItem={({item}) => <MovieCard movie={item} />}
        sliderWidth={width}
        itemWidth={width * 0.62}
        firstItem={2}
        inactiveSlideScale={0.6}
      /> */}
      <Text></Text>
    </View>
  );
};

export default TrendingMovies;

const styles = StyleSheet.create({});
