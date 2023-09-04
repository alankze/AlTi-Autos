import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import NewCar from "../pages/NewCar";
import CarDetails from "../pages/CarDetails";

import SellPage from "../pages/SellPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import Cars from "../pages/Cars";
import "../index.css";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="cars" element={<Cars />} />
          <Route path="cars/new" element={<NewCar />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="cars/:id" element={<CarDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
};

export default Main;
