import React from 'react';
import {Link} from "react-router-dom";

const Header = () => (
  <header className="fixed-top px-5" data-header="Header Wrapper">
    <input type="hidden" name="test-header" data-test="Header Component" />
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <Link
        className="navbar-brand logo"
        data-test="Logo"
        to="#stash"
      >
        Zonecc
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="#stash">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#stash">
              Another
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;