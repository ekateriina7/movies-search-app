import React, {useState, useEffect} from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, getUserData } from "../../actions";

const PrivateLinks = () => {
  const [user, setUser] = useState({})
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    async function fetchMyAPI() {
      const data = await dispatch(getUserData(localStorage.getItem("userId")));
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
         
         <a href='/profile' className="btn-floating btn-large waves-effect waves-light red">{user.username}</a>
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
