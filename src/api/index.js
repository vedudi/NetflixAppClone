import {requests} from '../utils/request';

export const getTopRatedMovies = () => requests.get('/movie/top_rated');
export const getTrendingMovies = () => requests.get('/trending/all/day');
export const getUpComingMovies = () => requests.get('/movie/upcoming');
export const getMovieDetails = id => requests.get(`/movie/${id}`);
export const getMovieCredits = id => requests.get(`/movie/${id}/credits`);
export const getMovieSimilar = id => requests.get(`/movie/${id}/similar`);
