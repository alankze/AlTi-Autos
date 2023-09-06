import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/Auth';
import AboutUsPage from '../pages/AboutUsPage';
import ContactUsPage from '../pages/ContactUsPage';
import Logo from '../assets/img/logo.png'

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header class="bg-amber-500 font-sans w-full m-0" >
      

            <nav >
              <div class="bg-amber shadow w-screen">
                <div class="container mx-auto px-4">
                  <div class="flex items-center justify-between ">
                    <img src={Logo} alt="Logo" className="sm:w-20, lg:w-40"/>
                    <div class=" sm:flex sm:items-center ">
                      <ul>
                        <button class="text-gray-800 text-2xl font-semibold hover:text-purple-600 mr-20">
                          <NavLink to="/" >Home</NavLink>
                        </button>

                        {user ? (
                          <>
                            <button class="text-gray-800 text-2xl font-semibold hover:text-purple-600 mr-20">
                              <NavLink to="/cars/new" >Add Car</NavLink>
                            </button>
                            <div>
                            <p class="absolute top-5 left-10 text-3xl font-semibold ml-4 mt-2">Hello {user.username}</p>
                            </div>
                            <button onClick={logout} class="absolute bo-5 left-20 text-gray-800 text-2xl font-semibold hover:text-purple-600 mr-4">Logout</button>
                          </>
                        ) : (
                          <>
                            <button class="text-gray-800 text-2xl font-semibold hover:text-purple-600 mr-4">
                              <NavLink to="/login" >Login</NavLink>
                            </button>
                            <button class="text-gray-800 text-2xl font-semibold hover:text-purple-600 mr-4">
                              <NavLink to="/register" >Register</NavLink>
                            </button>
                          </>
                        )}
                              <button class="text-gray-800 text-2xl font-semibold hover:text-purple-600 mr-20">
                                  <NavLink to="/AboutUsPage" >About Us</NavLink>
                              </button>
                              <button class="text-gray-800 text-2xl font-semibold hover:text-purple-600 mr-20">
                                  <NavLink to="/ContactUsPage" >Contact</NavLink>
                              </button>
                              <li>
                                  <button to="/"class="text-gray-800 text-2xl font-semibold hover:text-purple-600 mr-20">Favorite</button>
                              </li>
                              <li>
                                  <button to="/" class="text-gray-800 text-2xl font-semibold hover:text-purple-600 mr-1">Menu</button>
                              </li>
                      </ul>
                      {/* <div class="block sm:hidden bg-white border-t-2 py-2">
                        <div class="flex flex-col">
                          <NavLink to="/" class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Home</NavLink>
                          <NavLink to="/cars/new" class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Add Car</NavLink>
                          <button onClick={logout} class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Logout</button>
                          <NavLink to="/login" class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Login</NavLink>
                          <NavLink to="/register" class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Register</NavLink>
                          <NavLink to="/AboutUsPage" class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">About Us</NavLink>
                          <NavLink to="/ContactUsPage" class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Contact</NavLink>
                          <button to="/"class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Favorite</button>
                          <button to="/" class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Menu</button>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </nav>

      
    </header>
  );
};

export default Header;
