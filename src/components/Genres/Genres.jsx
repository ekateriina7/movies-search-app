import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../actions";
import './Genres.scss';
import Tag from "../Tag";

function Genres() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  
  return (
    <div className='genres'>
      {state.genres &&
        state.genres.map((genre) => (
            <Tag key={genre.id} name={genre.name} id={genre.id}/>
        ))}
    </div>
  );
}

export default Genres;
