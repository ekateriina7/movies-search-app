import React from "react";
import { NavLink } from "react-router-dom";

function PublicLinks() {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign up</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PublicLinks;
