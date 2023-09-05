import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
/*import { Carousel } from 'react-responsive-carousel';*/

const SellPage = () => {
  return (
    <div class="slideshow">
  <ul class="slides">
    <li><img src="../assets/img/bmw.jpg" alt="Image 1"></li>
    <li><img src="../assets/img/mercedes.jpeg" alt="Image 2"></li>
    <li><img src="../assets/img/audi.jpg" alt="Image 3"></li>
  </ul>
  </div>
  )
};


/*function HomePage() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <Carousel>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}*/

export default HomePage;