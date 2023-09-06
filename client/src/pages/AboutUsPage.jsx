import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';


const AboutUsPage = () => {
  return (
  <div class="flex flex-col text-center min-h-screen">
    <div className="text-white text-[24px]">
        <h1>About Us</h1>
        <p >Welcome to AlTi-Autos, <br/>your trusted destination for high-quality pre-owned vehicles.<br/> With a passion for automobiles and a commitment to customer satisfaction, <br/>we strive to provide a seamless car-buying experience that meets your needs and exceeds your expectations.<br/>
<h1>Our Mission</h1><br/>
At AlTi-Autos, our mission is to connect car enthusiasts with their dream vehicles.<br/> We understand that buying a car is a significant decision, <br/>and we aim to make it an enjoyable and hassle-free process.<br/> With a focus on transparency, reliability, and exceptional service, <br/>we are dedicated to earning your trust and helping you find the perfect car that fits your lifestyle and budget.<br/>
Wide Selection of Quality Cars<br/>
We take pride in offering a diverse inventory of well-maintained, <br/>high-quality pre-owned vehicles.<br/> From sleek sedans to rugged SUVs,<br/> our selection is carefully curated to cater to a variety of preferences and requirements. <br/>
Each vehicle undergoes a rigorous inspection to ensure its mechanical integrity, <br/>and we provide detailed vehicle history reports, so you can make an informed decision.</p>
    </div>
  </div>
  )
};

export default AboutUsPage;