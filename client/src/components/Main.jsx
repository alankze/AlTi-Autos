import React from 'react';

import {Route, Routes} from 'react-router-dom';

import NewCar from './NewCar';
import CarDetails from './CarDetails';
import UpdateCar from './UpdateCar';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import Cars from './Cars';
import AboutUsPage from '../pages/AboutUsPage';
import ContactUsPage from '../pages/ContactUsPage';



const Main = () => {
  return(
    <div className="bg-gray-800 flex flex-col min-h-screen ">
     <main className="bg-gray-800">
        <Routes>
          <Route path= "/" element={<ProtectedRoute />}>
            <Route path="" element={<Cars />} />
            <Route path="cars/new" element={<NewCar />} />
            <Route path="cars/:id" element={<CarDetails />} />
            <Route path="cars/:id/update" element={<UpdateCar />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/AboutUsPage" element={<AboutUsPage />} />
            <Route path="ContactUsPage" element={<ContactUsPage />} />
        </Routes>
      </main>
    </div>
  );
};


export default Main;
