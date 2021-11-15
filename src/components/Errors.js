import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function Errors() {
  const notify = (message) => toast(message);
const statePagination = useSelector(state=>state.pagination)
const stateMovies = useSelector(state=>state.movies)
const stateAuth = useSelector(state=>state.auth)
useEffect(()=>{
if(stateAuth.error){
    notify(stateAuth.error)
}
if(statePagination.error){
    notify(statePagination.error)
}
if(stateMovies.error){
    notify(stateMovies.error)
}
}, [stateAuth.error,statePagination.error, stateMovies.error])
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default Errors;
