import React from 'react';
import { useDispatch } from "react-redux";
import { setGenres } from "../actions";

function Tag({ name, id}) {
    const dispatch = useDispatch();
    const onClick=()=>{
        dispatch(setGenres(id))
    }
    return (
        <div onClick={onClick} className="chip">
            {name}
          </div>
    )
}

export default Tag
