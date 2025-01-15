import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getMovieCredits,
  getMovieDetails,
  getMovieSimilar,
  getTopRatedMovies,
  getTrendingMovies,
  getUpComingMovies,
} from '../../api';
import {
  setMovieCreditState,
  setMovieDetailState,
  setMovieSimilarState,
  setTopRatedState,
  setTrendingState,
  setUpComingState,
} from '../slices/movieSlice';

export const GetTrendingMovies = createAsyncThunk(
  'movie/getTrendingMovies',
  async (_, {dispatch}) => {
    const response = await getTrendingMovies();

    dispatch(setTrendingState(response.results));
  },
);
export const GetUpComingMovies = createAsyncThunk(
  'movie/getUpcomingMovies',
  async (_, {dispatch}) => {
    const response = await getUpComingMovies();

    dispatch(setUpComingState(response.results));
  },
);
export const GetTopRatedMovies = createAsyncThunk(
  'movie/getTopRatedMovies',
  async (_, {dispatch}) => {
    const response = await getTopRatedMovies();

    dispatch(setTopRatedState(response.results));
  },
);
export const GetMovieDetails = createAsyncThunk(
  'movie/getMovieDetails',
  async (id, {dispatch}) => {
    const response = await getMovieDetails(id);

    dispatch(setMovieDetailState(response));
  },
);
export const GetMovieCredits = createAsyncThunk(
  'movie/getMovieCredits',
  async (id, {dispatch}) => {
    const response = await getMovieCredits(id);

    dispatch(setMovieCreditState(response.cast));
  },
);
export const GetMovieSimilar = createAsyncThunk(
  'movie/getMovieSimilar',
  async (id, {dispatch}) => {
    const response = await getMovieSimilar(id);

    dispatch(setMovieSimilarState(response.results));
  },
);
