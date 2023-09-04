import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ButtonContainer from '../components/ButtonContainer';
import ScrollbarContainer from '../components/ScrollbarContainer';

const SellPage = () => {
  return (
    <div>
      <h1>Direct Sale</h1>
      <h2>Popular Brands:</h2>
      <ButtonContainer/>
      <ScrollbarContainer/>

    </div>
  )
};

export default SellPage;