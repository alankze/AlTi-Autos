import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const ContactUsPage = () => {
  return (
<div>
  <div class="flex flex-col min-h-screen">
    <div className="text-white">
      <div className="mb-4 mt-6 text-xl font-light leading-relaxed">
          <h1>Contact Us</h1>
          <div className="text-center">
          <p className="mb-4 mt-6 text-xl font-light leading-relaxed">We would love to hear from you! If you have any questions,<br/> feedback, or inquiries,<br/> please don't hesitate to get in touch with us.<br/> You can reach us using the following methods:</p>
          </div>
          
          <div className="text-center">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          </div>
          <div>
            <div className=" text-center">
              <ul class="flex-col  list-disc">
                  Mailing Address:
                  <br/>
                  Fridrichstr.123
                  <br/>
                  Berlin, Berlin, 10557
                  <br/>
                  Germany
                  <br/>
                  <br/>
                  Phone:
                  <br/>
                  +49 123-456-7890
                  <br/>
                  Email:
                  <span>info@alti-autos.com</span>
                  Social Media:
                  <br/>
                  Facebook: <span>facebook.com/alti-autos</span>
                  Twitter: <span>@alti-autos</span>
                  Instagram: <span>@alti-autos</span>
                  </ul>
            </div>
          </div>
      </div>
    </div>
  </div>
  <ContactForm/>
</div>
 );
};

export default ContactUsPage;