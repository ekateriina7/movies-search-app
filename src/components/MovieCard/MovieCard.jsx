import React from "react";
import "./MovieCard.scss";
import {useHistory} from 'react-router-dom'

function MovieCard({ title, imagePath, vote, id}) {
  const history =  useHistory()
  const onClick = ()=>{
    history.push(`/movie/:${id}`);
  }
  const imageUrl = "https://image.tmdb.org/t/p/w300/";
  return (
    <div className="card movie-card">
      <div className="card-image">
        <img onClick={onClick} src={imagePath&&`${imageUrl}${imagePath}`} alt="movie avatar" />
      </div>
      <div className="card-content">
        <h6>{title}</h6>
        <p>Rated as: {vote}</p>
      </div>
    </div>
  );
}

export default MovieCard;
