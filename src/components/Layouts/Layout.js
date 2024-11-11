import React from "react";
import Header from "../Header/Header";
import Section1 from "../Sections/Section1";
import Section3 from "../Sections/Section3";
import FeaturedTours from "../Sections/FeaturedTours";
import Search from "../Sections/Search";


const Layout = () =>
{
    return (
        <>
            <Header />
            <Section1/>
            <Search/>
            <Section3/>
            <FeaturedTours/>
        </>
    );
};
export default Layout;