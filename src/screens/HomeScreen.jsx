import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Logo from '../components/Logo';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigations/AppScreens';
import {useDispatch, useSelector} from 'react-redux';
import {
  GetTopRatedMovies,
  GetTrendingMovies,
  GetUpComingMovies,
} from '../app/actions/movieActions';
import {
  getTopRatedState,
  getTrendingState,
  getUpComingState,
} from '../app/movieSelector';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from './MovieList';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTopRatedMovies());
    dispatch(GetTrendingMovies());
    dispatch(GetUpComingMovies());
  }, [dispatch]);
  const topRatedMovies = useSelector(getTopRatedState());
  const trendingMovies = useSelector(getTrendingState());
  const upComingMovies = useSelector(getUpComingState());

  return (
    <View className="bg-neutral-800 flex-1">
      <SafeAreaView>
        <View className="flex-row justify-between items-center px-4">
          <Icon name="menuunfold" size={30} color="#fff" />
          <Logo />
          <TouchableOpacity
            onPress={() => navigation.navigate(AppScreens.Search)}>
            <Icon name="search1" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView>
        <TrendingMovies />
        <MovieList title="Trending" data={trendingMovies} />
        <MovieList title="Top Rated" data={topRatedMovies} />
        <MovieList title="Up Coming" data={upComingMovies} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
