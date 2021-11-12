import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getMovies } from "../../actions";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Movies.scss";
import Pagination from "../../components/Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const state = useSelector((state) => state.pagination)
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchMyAPI() {
      const movies = await dispatch(getMovies(state.page));
      console.log(movies)
      const moviesArr = movies.results;
      setMovies(moviesArr);
    }
    fetchMyAPI();
  }, [dispatch, state.page]);
  console.log(movies);
  return (
    <div className="movies">
      {movies &&
        movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              imagePath={movie.poster_path}
              vote={movie.vote_average}
              id={movie.id}
            />
          );
        })}
        <Pagination/>
    </div>
  );
}

export default Movies;
