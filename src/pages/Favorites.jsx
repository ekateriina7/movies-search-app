import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMovie } from "../actions";
import MovieCard from "../components/MovieCard/MovieCard";

const ids = [2, 3];

function Favorites() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    let movies = [];
    async function fetchMyAPI() {
      ids.map((id) => {
        dispatch(getMovie(id)).then((res) => {
          return movies.push(res);
        });
        return movies;
      });
      setMovies(movies);
    }
    fetchMyAPI();
  }, [dispatch]);
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
            />
          );
        })}
    </div>
  );
}

export default Favorites;
