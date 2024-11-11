import React from "react";
import Header from "../Header/Header";
import KnowBefore from "../Sections/KnowBefore";
import Search from "../Sections/Search";
import Service from "../Sections/Service";
import FeaturedTours from "../Sections/FeaturedTours";



const Layout = () =>
{
    return (
        <>
            <Header />
            <KnowBefore />
            <Search />
            <Service />
            <FeaturedTours />
        </>
    );
};
export default Layout;