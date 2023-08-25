import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => {
  return (
    <header>
        <nav>
            <logo>
                <img src="/logo.png" alt="logo" />
            </logo>
            <ul>
                <li>
                    <NavLink to="/">Search</NavLink>
                </li>
                <li>
                    <NavLink to="/cars/new">Sell</NavLink>
                </li>
                <li>
                    <NavLink to="/">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/">Contact</NavLink>
                </li>
                <li>
                    <button to="/">Favorite</button>
                </li>
                <li>
                    <button to="/">Menu</button>
                </li>
            </ul>
        </nav>
    </header>
 );
};

export default Header;
