import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cars from './Cars';
import NewCar from './NewCar';
import CarDetails from './CarDetails';
import UpdateCar from './UpdateCar';

const Main = () => {
  return(
     <main>
        <Routes>
            <Route path="/" element={<Cars />} />
            <Route path="cars/new" element={<NewCar />} />
            <Route path="cars/:id" element={<CarDetails />} />
            <Route path="cars/:id/update" element={<UpdateCar />} />
        </Routes>
    </main>
  );
};


export default Main;
