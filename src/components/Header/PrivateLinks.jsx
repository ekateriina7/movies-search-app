import React, {useState, useEffect} from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, } from "react-redux";
import { logout, getUserData, } from "../../actions";

const PrivateLinks = () => {
  const [user, setUser] = useState({})
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    async function fetchMyAPI() {
      const data = await dispatch(getUserData());
      setUser(data);
    }
    fetchMyAPI();
  }, [dispatch]);
  const onSubmit = (e) => {
    dispatch(logout());
    localStorage.removeItem('userId')
    history.push('/login')
  };
  const id = localStorage.getItem('userId')
  const path = `/profile/:${id}`
  return (
    <div>
      <ul className="right">
      <li  style={{marginRight:'3vh', fontStyle:'italic'}}>
          Hi, {user.username}
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
        <li>
          <NavLink to={path}>My profile</NavLink>
        </li>
        <li>
         <img style={{width:'62px', height:'62px'}} src={user.photo||'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} className="circle" alt='avatar'/>
        </li>
        <li>
          <a href="/" onClick={(e) => onSubmit(e)}>
            Log out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PrivateLinks;
