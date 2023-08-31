import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/search",
    display: "Search",
  },
  {
    path: "/sell",
    display: "Sell",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className="header">
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Logo</span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header-top-right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i>Login
                </Link>
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i>Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="main-navbar">
        <Container>
          <div className="navigation_wrapper d-flex align-items-center justify-content-between">
            <span className="mobile_menu">
              <i class="ri-menu-line"></i>
            </span>
            <div className="navigation">
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav_active nav_item" : "nav_item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav_right">
              <div className="search_box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};
export default Header;

{
  /* <ul>
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
            
     
  );
};*/
}
