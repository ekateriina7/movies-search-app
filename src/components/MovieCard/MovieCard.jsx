import React from "react";
import "./MovieCard.scss";
import { useHistory } from "react-router-dom";

function MovieCard({ title, imagePath, vote, id }) {
  const history = useHistory();
  const onClick = () => {
    history.push(`/movie/:${id}`);
  };
  const imageUrl = "https://image.tmdb.org/t/p/w300/";
  return (
    <div className="card-item">
      <div className="movie-card">
        <div className="image">
          <img
            className="card-img"
            onClick={onClick}
            src={imagePath && `${imageUrl}${imagePath}`}
            alt="movie avatar"
          />
        </div>
        <div className="card-content">
          <h6>{title}</h6>
          <p>Rated as: {vote}</p>
        </div>
        <div className="card-footer">
         <a href={`/movie/:${id}`}>See details</a>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
