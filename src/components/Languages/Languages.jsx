import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getLanguages, setLanguage } from "../../actions";

function Languages() {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.movies);
  console.log(state.languages);
  useEffect(() => {
    dispatch(getLanguages());
  }, [dispatch]);
  const handleChange = (value) => {
    console.log(value.iso_639_1);
    setSelected({ value });
    dispatch(setLanguage(value.iso_639_1))
  };
  
  return (
    <div className="select-container">
      <Select
        options={state.languages}
        getOptionLabel={(options) => options["english_name"]}
        value={selected && selected["english_name"]}
        onChange={handleChange}
        placeholder="Choose the language of the movie"
      />
    </div>
  );
}

export default Languages;
