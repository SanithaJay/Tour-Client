import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import About from '../components/Sections/About'
import Gallery from '../components/Sections/Gallery'


const Routing = () =>
{
    return (
        <Routes>
            <Route path="/home" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/gallery" element={ <Gallery /> } />

           {/*  <Route path="/tours" element={ <Tours /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/booking" element={ <Booking /> } />
            <Route path="/tour/:id" element={ <SingleTour /> } />
            <Route path="/review/:id" element={ <Review /> } /> */}
        </Routes>
    )
}

export default Routing