import React from "react";
import { Link } from "react-router-dom";
import PublicLinks from "./PublicLinks";
import PrivateLinks from "./PrivateLinks";

function Header() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Movies
        </Link>
        <PublicLinks/>
        <PrivateLinks/>
      </div>
    </nav>
  );
}

export default Header;
