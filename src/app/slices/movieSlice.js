import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  trending: [],
  upcoming: [],
  topRated: [],
  loading: false,
  error: false,
};

const MovieReducer = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
});

export default MovieReducer.reducer;
