import React from 'react';
import { Link, Outlet } from 'react-router-dom';


export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top">
      <div className="container-fluid">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-door-open-fill fa-7x" viewBox="0 0 16 16">
          <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
        </svg>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item link">
              {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item link">
              {/* <a class="nav-link" href="/about">About</a> */}
              <Link className="nav-link active" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </nav>

  );
};