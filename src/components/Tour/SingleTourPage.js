import React from 'react'
import Header from '../Header/Header'
import About from '../Sections/About'
import Footer from '../Footer/Footer'
import SingleTour from './SingleTour'

const SingleTourPage = () => {
  return (
    <div>
        <Header/>
       <SingleTour/>
        <About/>
        <Footer/>
    </div>
  )
}

export default SingleTourPage;