import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import About from '../components/Sections/About'
import Gallery from '../components/Sections/Gallery'
import Registeration from '../components/RegisterUser/Registeration'
import LoginPage from '../components/Login/LoginPage'
import Tour from '../components/Tour/Tour'
import SearchTourPage from '../components/Tour/SearchTourPage'
import SingleTourPage from '../components/Tour/SingleTourPage'


const Routing = () =>
{
    return (
        <Routes>
             <Route path="/" element={<Home />} /> 

            <Route path="/home" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/gallery" element={ <Gallery /> } />
            <Route path="/register" element={ <Registeration /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/tours" element={ <Tour /> } />
            <Route path="/tours/search" element={<SearchTourPage/>}/>
            <Route path="/tour/:id" element={ <SingleTourPage /> } />
           {/*  
           
           
            <Route path="/booking" element={ <Booking /> } />
            
            <Route path="/review/:id" element={ <Review /> } /> */}
        </Routes>
    )
}

export default Routing