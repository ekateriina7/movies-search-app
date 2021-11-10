import React from "react";

function MovieCard({ title, imagePath }) {
    const imageUrl = 'https://image.tmdb.org/t/p/w500/'
  return (
    <div className="card">
      <div className="card-image" >
        <img src={`${imageUrl}${imagePath}`} alt="movie avatar"/>
        <span className="card-title">Card Title</span>
      </div>
      <div className="card-content">
        <p>{title}</p>
      </div>
      <div className="card-action">
        <a href="/">This is a link</a>
      </div>
    </div>
  );
}

export default MovieCard;
