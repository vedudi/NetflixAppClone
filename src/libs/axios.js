import axios from 'axios';
import {ApiKey, Token} from '../constants';

const baseURL = 'https://api.themoviedb.org/3';

export const axiosAgent = axios.create({
  baseURL,
  params: {
    api_key: ApiKey,
    language: 'tr-TR',
  },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${Token}`,
  },
});
