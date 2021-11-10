import React from "react";
import { Link } from "react-router-dom";
import PrivateLinks from "./PrivateLinks";
import PublicLinks from "./PublicLinks";

function Header() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Movies
        </Link>
        {localStorage.getItem('user')?<PrivateLinks/>:<PublicLinks/>}
      </div>
    </nav>
  );
}

export default Header;
