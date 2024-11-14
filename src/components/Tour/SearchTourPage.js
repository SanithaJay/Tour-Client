import React from 'react'
import Header from '../Header/Header'
import SearchTour from './SearchTour'
import Subscribe from '../Sections/Subscribe'
import About from '../Sections/About'
import Footer from '../Footer/Footer'

const SearchTourPage = () => {
  return (
    <>
    <Header/>
    <div className='mt-5'>
    <SearchTour/>
    </div>
    
    <Subscribe/>
    <About/>
    <Footer/>
    </>
  )
}

export default SearchTourPage