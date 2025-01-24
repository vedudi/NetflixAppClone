import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {GetPersonDetail, GetPersonMovie} from '../app/actions/movieActions';
import {getPersonDetailState, getPersonMovieState} from '../app/movieSelector';
import BackAndFavorite from '../components/BackAndFavorite';
import PersonCard from '../components/PersonCard';

const PersonScreen = () => {
  const id = useRoute().params.id;
  const dispatch = useDispatch();
  const person = useSelector(getPersonDetailState());
  const personMovies = useSelector(getPersonMovieState());

  useEffect(() => {
    dispatch(GetPersonDetail(id));
    dispatch(GetPersonMovie(id));
  }, [id, dispatch]);
  return (
    <ScrollView className="bg-neutral-900 flex-1">
      <BackAndFavorite showHeart={false} />
      <PersonCard person={person} personMovies={personMovies} />
    </ScrollView>
  );
};

export default PersonScreen;

const styles = StyleSheet.create({});
