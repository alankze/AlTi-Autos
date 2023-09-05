import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import button from './components/HomeButton';
import { Link } from 'react-router-dom';

const SellSuccesfulPage = () => {
  return (
    <div>
        <h1>Direct sale</h1>
        <p>Thank You!
Thank you for selling your car with us! Your announcement is already added succesfully. 
Best regards,
The AlTi-Autos Team</p>

        <h2>Go back to Searching Page</h2>
        <button>
            <ul>
                <li>
                    './components/HomeButton'
                </li>
            </ul>
        </button>
    </div>
  );
};

export default SellSuccesfulPage;