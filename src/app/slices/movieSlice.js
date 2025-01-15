import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  trending: [],
  upcoming: [],
  topRated: [],
  movieCredit: [],
  movieSimilar: [],
  movieDetail: {},
  loading: false,
  error: false,
};

const MovieReducer = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setTopRatedState: (state, action) => {
      state.topRated = action.payload;
    },
    setTrendingState: (state, action) => {
      state.trending = action.payload;
    },
    setUpComingState: (state, action) => {
      state.upcoming = action.payload;
    },
    setMovieDetailState: (state, action) => {
      state.movieDetail = action.payload;
    },
    setMovieCreditState: (state, action) => {
      state.movieCredit = action.payload;
    },
    setMovieSimilarState: (state, action) => {
      state.movieSimilar = action.payload;
    },
  },
});
export const {
  setTopRatedState,
  setTrendingState,
  setUpComingState,
  setMovieDetailState,
  setMovieCreditState,
  setMovieSimilarState,
} = MovieReducer.actions;
export default MovieReducer.reducer;
