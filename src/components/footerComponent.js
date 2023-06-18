import React from "react";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <footer className="bg-white text-center py-3">
      <h1 className="mb-3" style={{ fontSize: "16px" }}>
        Shop here, spend your money, go back, spend again
      </h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
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
      <p>Show info: Andrew Milman BrightCode Project</p>
    </footer>
  );
}

export default FooterComponent;
