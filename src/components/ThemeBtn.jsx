import React, {useState} from 'react';
import{FaMoon, FaSun} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux'
import {changeTheme} from '../actions';

function ThemeBtn() {
    const dispatch = useDispatch()
    const state = useSelector(state=>state.theme)
    const[dark, setDark] = useState(false)
    const onClick = () =>{
        setDark(!dark)
        if(dark){
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
            dispatch(changeTheme())
        } else {
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
            dispatch(changeTheme())
        }
       
      }
    return (
        <div onClick={onClick}>
           {dark?<FaSun/>:<FaMoon/>}
        </div>
    )
}

export default ThemeBtn
