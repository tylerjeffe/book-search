import React from "react";
import "./App.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Book Search
      </a>
      <a className="navbar-brand" href="/search">
        Search
      </a>
      <a className="navbar-brand" href="/save">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
