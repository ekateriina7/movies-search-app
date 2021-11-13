import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMoviesByTitle, getMovies } from "../../actions";
import "./Movies.scss";
import Pagination from "../../components/Pagination";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button/Button";
import MoviesCards from "../../components/MoviesCards";

function Movies() {
  const [query, setQuery]= useState({query:''})
  const [search, setSearch]= useState(false)
  const statePagination = useSelector((state) => state.pagination);
  console.log(query);
  const dispatch = useDispatch();
  useEffect(() => {
    if(search){
      console.log(query, 'worked')
      dispatch(searchMoviesByTitle(query.query, statePagination.page));
     
    } else{console.log('didnt work')
      dispatch(getMovies(statePagination.page));
  }
    
  }, [dispatch, statePagination.page, search,query]);
  const onChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onClick = (e) => {
    e.preventDefault()
    dispatch(searchMoviesByTitle(query.query, statePagination.page));
    setSearch(true)
  };

  return (
    <div className="container movies-container">
      <form className="search-form" onSubmit={e=>onClick(e)}>
        <div className="input-field">
        <input
        type='search'
        value={query.query}
        name='query'
        className="input-field"
        placeholder='Enter the title'
        onChange={e=>onChange(e)}
      />
        </div>
        <Button>
          <i className="material-icons">search</i>
        </Button>
      </form>
      <MoviesCards />
      <Pagination />
    </div>
  );
}

export default Movies;
