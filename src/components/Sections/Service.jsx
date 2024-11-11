import React from 'react';
import '../../styles/Service.css';
import weather from '../../assets/images/weather.png';
import guide from '../../assets/images/guide.png';
import customization from '../../assets/images/customization.png';



const Service = () => {
    return (
        <div className="container  service-container">
            <div className="row">
                <div className="col-md-3 mb-4"> 
                    <div className="service-first-component">
                        <p className='fontFamily service-serve'>What we serve</p>
                        <h2>We offer our best services</h2>
                    </div>
                </div>         
                <div className="col-md-3 mb-4"> 
                    <div className="service-card">
                       <div className=" service-imageIcons-shape d-flex align-items-center justify-content-center">
                         <img className="service-imageIcons" src={weather} alt="weather"/></div>
                        <h6 className="mt-2">Calculate weather</h6>
                        <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="service-card">
                       <div className=" service-imageIcons-shape d-flex align-items-center justify-content-center">
                         <img className="service-imageIcons" src={guide} alt="weather"/></div>
                        <h6 className="mt-2">Best tour guide</h6>
                        <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="service-card">
                       <div className=" service-imageIcons-shape d-flex align-items-center justify-content-center">
                         <img className="service-imageIcons" src={customization} alt="weather"/></div>
                        <h6 className="mt-2">Customization</h6>
                        <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
