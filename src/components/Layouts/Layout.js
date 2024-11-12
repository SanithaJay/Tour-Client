import React from "react";
import Header from "../Header/Header";
import KnowBefore from "../Sections/KnowBefore";
import Search from "../Sections/Search";
import Service from "../Sections/Service";
import FeaturedTours from "../Sections/FeaturedTours";
import Experience from "../Sections/Experience";
import Gallery from "../Sections/Gallery";
import ClientsLove from "../Sections/ClientsLove";



const Layout = () =>
{
    return (
        <>
            <Header className="header" />
            <div className="main-content">
                <KnowBefore />
                <Search />
                <Service />
                <FeaturedTours />
                <Experience />
                <Gallery/>
                <ClientsLove/>
            </div>
        </>
    );
};
export default Layout;