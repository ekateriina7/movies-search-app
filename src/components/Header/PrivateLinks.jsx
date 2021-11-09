import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions";

const PrivateLinks = () => {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    dispatch(logout());
  };
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
          <NavLink to="/account">My account</NavLink>
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
