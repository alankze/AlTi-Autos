import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/Auth';
import AboutUsPage from '../pages/AboutUsPage';
import ContactUsPage from '../pages/ContactUsPage';
import Logo from '../assets/img/logo.png'

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header >
      <nav class="flex items-center justify-between bg-amber-500 py-4 ">
        <img src={Logo} alt="Logo" className="sm:w-20, lg:w-40"/>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          {user ? (
            <>
              <li>
                <NavLink to="/cars/new">Add Car</NavLink>
              </li>
              <p>Hello {user.username}</p>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
                <li>
                    <NavLink to="/AboutUsPage">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/ContactUsPage">Contact</NavLink>
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
