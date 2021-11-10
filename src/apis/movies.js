import axios from 'axios';

export const API = 'https://api.themoviedb.org/3';
export const moviesAxios = axios.create({
    baseURL: API,
    params: {
      api_key: '2ef207f671a03d2931572dd4abb2ae9b',
    },
  });

  export const getMovies = async () => {
    const { data } = await moviesAxios.get('/movie/popular');
    return data;
  };
