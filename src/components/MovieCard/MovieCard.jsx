import React from "react";
import "./MovieCard.scss";
import {useHistory} from 'react-router-dom'

function MovieCard({ title, imagePath, vote, id}) {
  const history =  useHistory()
  const onClick = ()=>{
    history.push(`/movie/:${id}`);
  }
  const imageUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="card movie-card">
      <div className="card-image">
        <img onClick={onClick} src={`${imageUrl}${imagePath}`} alt="movie avatar" />
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
