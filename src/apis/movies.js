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

  export const getGenres = async () => {
    const { data } = await moviesAxios.get('/genre/movie/list');
    return data;
  };

  export const getLanguages = async () => {
    const { data } = await moviesAxios.get('/configuration/languages');
    return data;
  };

  export const searchMoviesByGenreAndTitle = async (genres, language, page) => {
    if(Array.isArray(genres)){
      genres = genres.join('|')
    }
   
    const { data } = await moviesAxios.get('/discover/movie',{
      params: {
        with_genres: genres,
        with_original_language: language,
        page: page,
      },
    });
    return data;
  };