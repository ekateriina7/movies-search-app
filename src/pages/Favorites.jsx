import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMovie, getUserData } from "../actions";
import MovieCard from "../components/MovieCard/MovieCard";

function Favorites() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchMyAPI() {
      const  data = await dispatch(getUserData(localStorage.getItem('userId')));
      const ids = data.favorites
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
    <div className="movies container">
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