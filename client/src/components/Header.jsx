import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header>
      <nav>
            <logo>
                <img src="/logo.png" alt="logo" />
            </logo>
        <ul>
          <li>
            <NavLink to="/cars">Home</NavLink>
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
