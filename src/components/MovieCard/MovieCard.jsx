import React from "react";
import "./MovieCard.scss";

function MovieCard({ title, imagePath, vote }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="card movie-card">
      <div className="card-image">
        <img src={`${imageUrl}${imagePath}`} alt="movie avatar" />
        <span className="card-title">{title}</span>
      </div>
      <div className="card-content">
        <p></p>
      </div>
      <div className="card-action">
        <p>{vote}</p>
        <a href="/">This is a link</a>
      </div>
    </div>
  );
}

export default MovieCard;
