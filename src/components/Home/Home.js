import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import KnowBefore from "../Sections/KnowBefore";
import Search from "../Sections/Search";
import Service from "../Sections/Service";
import FeaturedTours from "../Sections/FeaturedTours";
import Experience from "../Sections/Experience";
import Gallery from "../Sections/Gallery";
import ClientsLove from "../Sections/ClientsLove";
import Subscribe from "../Sections/Subscribe";
import Footer from "../Footer/Footer";
import About from "../Sections/About";
import { useLocation } from "react-router-dom";

const Home = () =>
{

    const location = useLocation();
    const galleryRef = useRef(null);

    useEffect(() => {
        if (location.pathname === '/home') {
            window.scrollTo(0, 0); 
        }
    }, [location]);

    useEffect(() => {
        if (location.hash === "#gallery") {
            galleryRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <>
            <Header className="header" />
            <div className="main-content">
                <KnowBefore />
                <Search />
                <Service />
                <FeaturedTours />
                <Experience />
                <div ref={galleryRef}>
                    <Gallery />
                </div>
               
                <ClientsLove/>
                <Subscribe/>
                <About/>
                <Footer/>
             
            </div>
        </>
    );
};
export default Home;