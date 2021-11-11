import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMovie, getFavorites } from "../actions";
import MovieCard from "../components/MovieCard/MovieCard";

//const ids = [2, 3];

function Favorites() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const [ids, setIds] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      const ids = await dispatch(getFavorites(localStorage.getItem('userId')));
      console.log(ids)
      let movies = [];
      ids&&ids.map((id) => {
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
