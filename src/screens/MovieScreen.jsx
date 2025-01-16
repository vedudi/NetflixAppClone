import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  GetMovieCredits,
  GetMovieDetails,
  GetMovieSimilar,
} from '../app/actions/movieActions';
import {
  getMovieCreditState,
  getMovieDetailState,
  getMovieSimilarState,
} from '../app/movieSelector';

import BackAndFavorite from '../components/BackAndFavorite';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/Cast';
import MovieList from './MovieList';

const MovieScreen = () => {
  const {id} = useRoute().params;
  const dispatch = useDispatch();
  const {width, height} = Dimensions.get('window');
  useEffect(() => {
    dispatch(GetMovieDetails(id));
    dispatch(GetMovieCredits(id));
    dispatch(GetMovieSimilar(id));
  }, [dispatch, id]);
  const movieDetail = useSelector(getMovieDetailState());
  const movieCredit = useSelector(getMovieCreditState());
  const movieSimilar = useSelector(getMovieSimilarState());
  return (
    <SafeAreaView className="flex-1 bg-neutral-900">
      <ScrollView>
        <BackAndFavorite isAbsolute />
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`,
            }}
            style={{width: width, height: height * 0.55}}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{
              width: width,
              height: height * 0.4,
              position: 'absolute',
              bottom: 0,
            }}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
          />
        </View>
        <View>
          <Text className="text-white text-center font-semibold text-base tracking-wider">
            {movieDetail?.title}
          </Text>
          <Text className="text-neutral-400 text-center font-semibold text-base tracking-wider py-3">
            {movieDetail?.status} | {movieDetail?.release_date?.split('-')[0]} |{' '}
            {movieDetail?.runtime} min.
          </Text>
        </View>
        <View className="flex-row justify-center my-4">
          {movieDetail?.genres?.map((genre, index) => {
            let shotDot = index + 1 !== movieDetail.genres.length;
            return (
              <Text
                key={index}
                className="text-neutral-400 font-semibold text-base">
                {''}
                {genre.name}
                {''}
                {shotDot && ' | '} {''}
              </Text>
            );
          })}
        </View>
        <View>
          <Text className="text-neutral-400 mx-4 mt-2 tracking-wide">
            {movieDetail?.overview}
          </Text>
          {movieCredit?.length > 0 && <Cast data={movieCredit} />}
          {movieSimilar?.length > 0 && (
            <MovieList
              title={'Similar Movies'}
              data={movieSimilar}
              hideSeeAll
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
