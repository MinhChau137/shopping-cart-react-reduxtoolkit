import React from 'react';
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div>
        <header>
          <div className="header-wrapper">
            <h1>Menu</h1>
            <ul className="menu-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="../Login/Login.html">Login</a>
              </li>
            </ul>
            <div className="menu-icon">
              <i className="fas fa-align-right" />
            </div>
          </div>
        </header>
        <div className="navigation-menu">
          <nav>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="../Login/Login.html">Login</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
