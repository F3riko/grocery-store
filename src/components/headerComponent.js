  import React from "react";
  import { Link } from "react-router-dom";

  function HeaderComponent() {
    return (
      <>
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
      </>
    );
  }

  export default HeaderComponent;
