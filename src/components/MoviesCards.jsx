import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard/MovieCard";

function MoviesCards() {
  const stateMovies = useSelector((state) => state.movies);
  return (
    <div className="movies">
      {stateMovies.movies &&
        stateMovies.movies.map((movie) => {
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
    </div>
  );
}

export default MoviesCards;
