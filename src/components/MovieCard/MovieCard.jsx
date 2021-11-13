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
        <img onClick={onClick} src={imagePath?`${imageUrl}${imagePath}`:'https://blog.hubspot.com/hubfs/Sales_Blog/famous-movie-quotes.jpg'} alt="movie avatar" />
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
