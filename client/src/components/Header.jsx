import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Search</NavLink>
                </li>
                <li>
                    <NavLink to="/cars/new">Sell</NavLink>
                </li>
            </ul>
        </nav>
    </header>
 );
};

export default Header;
