import axios from 'axios';

export const API = 'https://api.themoviedb.org/3';
export const moviesAxios = axios.create({
    baseURL: API,
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  });
