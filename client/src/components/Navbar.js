import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../contexts/auth";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  console.log(authContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Project Management
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Projects
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/projects/create">
              New Project
            </Link>
          </li>
        </ul>
        <span className="navbar-text mr-2">
          {authContext.loggedInUser ? authContext.loggedInUser.username : ""}
        </span>
        {authContext.loggedInUser._id ? (
          <Link className="text-light" to="/logout">
            Logout
          </Link>
        ) : null}
      </div>
    </nav>
  );
};
export default Navbar;
