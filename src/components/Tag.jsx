import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { setGenres } from "../actions";

function Tag({ name, id}) {
    const[clicked, setClicked] = useState(false)
    const dispatch = useDispatch();
    const onClick=()=>{
        dispatch(setGenres(id))
        setClicked(true)
    }
    return (
        <div onClick={onClick} className={clicked?'clicked chip': 'chip'}>
            {name}
          </div>
    )
}

export default Tag
