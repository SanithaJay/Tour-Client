import React from 'react'
import '../../styles/Tour.css';
import Header from '../Header/Header';
import TourPage from './TourPage';
import Footer from '../Footer/Footer';
import Subscribe from '../Sections/Subscribe';
import About from '../Sections/About';

const Tour = () => {
  return (
    <>
    <Header />
    <TourPage/>
    <Subscribe/>
    <About/>
    <Footer/>
    </>
  );
};

export default Tour;