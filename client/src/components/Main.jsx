import React from 'react'
import {Route, Routes} from 'react-router-dom';

import NewCar from './NewCar';
import CarDetails from './CarDetails';
import UpdateCar from './UpdateCar';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import Cars from './Cars';

const Main = () => {
  return(
     <main>
        <Routes>
          <Route path= "/" element={<ProtectedRoute />}>
            <Route path="cars" element={<Cars />} />
            <Route path="cars/new" element={<NewCar />} />
            <Route path="cars/:id" element={<CarDetails />} />
            <Route path="cars/:id/update" element={<UpdateCar />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </main>
  );
};


export default Main;
