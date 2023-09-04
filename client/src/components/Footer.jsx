import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return <footer>Footer</footer>;
  return <footer>
    <ul>
      <li>
        <NavLink to='/'>About Us</NavLink>
      </li>
      <li>
        <NavLink to='/'>Contact</NavLink>
      </li>
    </ul>
  </footer>;
};

export default Footer;
