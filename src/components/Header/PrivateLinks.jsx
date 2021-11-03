import React from "react";
import { NavLink } from 'react-router-dom'

function privateLinks() {
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
      </ul>
    </div>
  );
}

export default privateLinks;
