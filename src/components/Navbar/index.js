import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)
  const toggleMenu = () =>{
    setMenuActive(active => !active)
  }

  return (
    <div>
      <div>
        <header>
          <div className="header-wrapper">
            <h1>Menu</h1>
            <ul className="menu-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
            <div className={menuActive ? "menu-icon active" : "menu-icon"} onClick = {toggleMenu}>
              <i className={menuActive ? "fas fa-times" :"fas fa-align-right"} />
            </div>
          </div>
        </header>
        <div className={menuActive ? "navigation-menu active" : "navigation-menu"}>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
