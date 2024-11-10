import React from 'react';
import '../../styles/Section3.css';
import weather from '../../assets/images/weather.png';
import guide from '../../assets/images/guide.png';
import customization from '../../assets/images/customization.png';



const Section3 = () => {
    return (
        <div className="container  section3-container">
            <div className="row">
                {/* First, the larger component taking more space */}
                <div className="col-md-3 mb-4"> {/* Increased column size to 6 */}
                    <div className="section3-first-component">
                        <p className='fontFamily section3-serve'>What we serve</p>
                        <h2>We offer our best services</h2>
                    </div>
                </div>

                {/* Then, the three cards, each taking 2 columns */}
                <div className="col-md-3 mb-4"> {/* Set column size to 2 */}
                    <div className="section3-card">
                       <div className=" section3-imageIcons-shape d-flex align-items-center justify-content-center">
                         <img className="section3-imageIcons" src={weather} alt="weather"/></div>
                        <h6 className="mt-2">Calculate weather</h6>
                        <p className="section3-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="section3-card">
                       <div className=" section3-imageIcons-shape d-flex align-items-center justify-content-center">
                         <img className="section3-imageIcons" src={guide} alt="weather"/></div>
                        <h6 className="mt-2">Best tour guide</h6>
                        <p className="section3-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="section3-card">
                       <div className=" section3-imageIcons-shape d-flex align-items-center justify-content-center">
                         <img className="section3-imageIcons" src={customization} alt="weather"/></div>
                        <h6 className="mt-2">Customization</h6>
                        <p className="section3-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;
