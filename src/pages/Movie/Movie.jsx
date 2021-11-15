import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, markAsFavorite } from "../../actions";
import "./Movie.scss";
import Tag from "../../components/Tag";
import Loader from "../../components/Loader";


function Movie() {
  const dispatch = useDispatch();
  const id = useParams();
  const stateMovies = useSelector((state) => state.movies);
  let movieId = id.id.substring(1);
  const [movie, setMovie] = useState({});
  const onClick = () => {
    dispatch(markAsFavorite(localStorage.getItem("userId"), movieId));
  };
  useEffect(() => {
    async function fetchMyAPI() {
      let movie = await dispatch(getMovie(movieId));
      setMovie(movie);
    }
    fetchMyAPI();
  }, [dispatch, movieId]);
  const imageUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="container">
       {stateMovies.loading && <Loader/>}
      <div className="  detail-card">
        <div className="card-image">
          <img src={`${imageUrl}${movie.poster_path}`} alt="movie avatar" />
          <span className="card-title">{movie.title}</span>
          <p className="card-title">{movie.tagline}</p>
        </div>
        <div className="card-content">
          <p>Description: {movie.overview}</p>
          <p>Rated as: {movie.vote_average}</p>
          <p> Released: {movie.release_date}</p>
          {movie.genres &&
        movie.genres.map((genre) => (
            <Tag key={genre.id} name={genre.name} id={genre.id}/>
        ))}
        </div>
        <div className="card-action">
          <p className='fav' onClick={onClick}>Add to favorite</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
