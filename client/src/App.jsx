import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import NewCar from './components/NewCar';
import CarDetails from './components/CarDetails';
import { Routes, Route, NavLink } from 'react-router-dom';
import Cars from './components/Cars';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
