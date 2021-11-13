import axios from 'axios';

export const API = 'https://api.themoviedb.org/3';
export const moviesAxios = axios.create({
    baseURL: API,
    params: {
      api_key: '2ef207f671a03d2931572dd4abb2ae9b',
    },
  });

  export const getMovies = async (page) => {
    const { data } = await moviesAxios.get('/movie/popular',{
      params: {
        page: page,
      },
    });
    return data;
  };

  export const getMovie = async (movieId) => {
    const { data } = await moviesAxios.get(`/movie/${movieId}`);
    return data;
  };

  export const searchMovieByTitle = async (query, page) => {
    const { data } = await moviesAxios.get('/search/movie',{
      params: {
        page: page,
        query: query
      },
    });
    return data;
  };
