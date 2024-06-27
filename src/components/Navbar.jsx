import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>
          <Link>SwaggForm</Link>
        </h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/api">API</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
