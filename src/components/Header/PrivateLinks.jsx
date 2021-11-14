import React, {useState, useEffect} from "react";
import { NavLink, useHistory } from "react-router-dom";
import { getStorage, ref } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { logout, getUserData, } from "../../actions";

const PrivateLinks = () => {
  const [user, setUser] = useState({})
  const state = useSelector((state)=>state.auth)
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
         <img style={{width:'62px', height:'62px'}} src={user.photo} className="circle"/>
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
