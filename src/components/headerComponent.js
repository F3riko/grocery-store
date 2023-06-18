import React from "react";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <div className="bg-white text-center py-3">
      <h1 className="mb-0">Supermarket</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Order now
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/order-history" className="nav-link">
                Order history
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HeaderComponent;
