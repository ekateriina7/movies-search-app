import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../actions";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchMyAPI() {
      let movies = await dispatch(getMovies());
      movies = movies.results;
      setMovies(movies);
    }
    fetchMyAPI();
  }, [dispatch]);
  console.log(movies);
  return <div>{movies&&movies.map((movie)=>{
return <MovieCard key={movie.id} title={movie.title} imagePath={movie.poster_path}/>
  })}</div>;
}

export default Movies;
