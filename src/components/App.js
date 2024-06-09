// app.js

import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainVideo from './MainVideo/MainVideo';
import Properties from './Properties';
import Description from './Description';
import TopPicks from './TopPicks';
import Services from './Services';
import Footer from './FooterEnd/FooterEnd';
import Quiz from './Pages/quiz'; 
import TermsOfService from './Pages/TermsAndServices';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TrackOrder from './Pages/TrackOrder';
import ContactPage from './Pages/ContactPage';
import AboutUs from './Pages/AboutUs';
import Faqs from './Pages/Faqs';
import Location from './Pages/Location';
import ShippingAndReturn from './Pages/ShippingAndReturn';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <Router>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skintest" element={<QuizPage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq-s" element={<Faqs />} />
          <Route path="/loc-ation" element={<Location />} />
          <Route path="/shipping-return" element={<ShippingAndReturn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Box>
    </Router>
  );
}

const HomePage = () => (
  <>
    <MainVideo />
    <Box>
      <Properties />
    </Box>
    <Box>
      <Description />
    </Box>
    <Box>
      <TopPicks />
    </Box>
    <Box>
      <Services />
    </Box>
    <Box>
      <Footer />
    </Box>
  </>
);

const QuizPage = () => <Quiz />;

export default App;

