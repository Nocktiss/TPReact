import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">DB-Movie</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Liste de film à regarder</Link>
            </li>

            <li>
              <Link to="/watched">Film vu</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Ajout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};