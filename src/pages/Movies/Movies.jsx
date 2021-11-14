import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchMoviesByGenresLanguage,
  searchMoviesByTitle,
  getMovies,
} from "../../actions";
import "./Movies.scss";
import Pagination from "../../components/Pagination";
//import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button/Button";
import MoviesCards from "../../components/MoviesCards";
import Genres from "../../components/Genres/Genres";
import Languages from "../../components/Languages/Languages";

function Movies() {
  const [query, setQuery] = useState({ query: "" });
  const [search, setSearch] = useState(false);
  const statePagination = useSelector((state) => state.pagination);
  const stateMovies = useSelector((state) => state.movies);
  console.log(stateMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    if (search) {
      if (!query.query) {
        setSearch(false);
      }
      dispatch(searchMoviesByTitle(query.query, statePagination.page));
    } else if (stateMovies.language || stateMovies.genresQueries) {
      console.log("here changed");
      dispatch(
        searchMoviesByGenresLanguage(
          stateMovies.genresQueries,
          stateMovies.language,
          statePagination.page
        )
      );
    } else {
      dispatch(getMovies(statePagination.page));
    }
  }, [
    dispatch,
    statePagination.page,
    search,
    query,
    stateMovies.language,
    stateMovies.genresQueries,
  ]);
  const onChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onClick = (e) => {
    e.preventDefault();
    dispatch(searchMoviesByTitle(query.query, statePagination.page));
    setSearch(true);
  };

  return (
    <div className="container movies-container">
      <Genres />
      <div className="search-language-container">
        <form className="search-form" onSubmit={(e) => onClick(e)}>
          <div className="input-field">
            <input
              type="search"
              value={query.query}
              name="query"
              className="input-field"
              placeholder="Enter the title"
              onChange={(e) => onChange(e)}
            />
          </div>
          <Button>
            <i className="material-icons">search</i>
          </Button>
        </form>
        <Languages />
      </div>
      <MoviesCards />
      <Pagination />
    </div>
  );
}

export default Movies;
