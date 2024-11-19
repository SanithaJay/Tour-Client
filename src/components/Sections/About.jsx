import React from 'react';
import image from "../../assets/images/logo.png";
import "../../styles/About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="text-center text-lg-start bg-body-white text-muted">
        <section>
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    {/* About Image and Text */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center">
                        <img src={image} alt="logo" className="about-image" />
                        <p className="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum natus!
                        </p>
                        <section className="d-flex justify-content-center justify-content-lg-between p-4">
                            <div>
                                <Link to="" className="me-4 text-reset">
                                    <i className="bi bi-person-gear"></i>
                                </Link>
                                <Link to="" className="me-4 text-reset">
                                    <i className="bi bi-github"></i>
                                </Link>
                                <Link to="" className="me-4 text-reset">
                                    <i className="bi bi-linkedin"></i>
                                </Link>
                                <Link to="" className="me-4 text-reset">
                                    <i className="bi bi-instagram"></i>
                                </Link>
                            </div>
                        </section>
                    </div>

                    {/* Discover Section */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="fw-bold mb-4">Discover</h6>
                        <p>
                            <Link to="/home" className="text-reset text-decoration-none">
                                Home
                            </Link>
                        </p>
                        <p>
                            <Link to="/about" className="text-reset text-decoration-none">
                                About
                            </Link>
                        </p>
                        <p>
                            <Link to="/tours" className="text-reset text-decoration-none">
                                Tours
                            </Link>
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="fw-bold mb-4">Quick Links</h6>
                        <p>
                            <Link to="/home#gallery" className="text-reset text-decoration-none">
                                Gallery
                            </Link>
                        </p>
                        <p>
                            <Link to="/login" className="text-reset text-decoration-none">
                                Login
                            </Link>
                        </p>
                        <p>
                            <Link to="/register" className="text-reset text-decoration-none">
                                Register
                            </Link>
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="fw-bold mb-4">Contact</h6>
                        <p className="fw-bold">
                            <i className="bi bi-geo-alt text-danger m-1"></i>
                            Address: <span className="fw-normal mx-3">Benguluru, Karnataka</span>
                        </p>
                        <p className="fw-bold">
                            <i className="bi bi-envelope text-danger m-1"></i>
                            Email: <span className="fw-normal ">sanithasudevan@gmail.com</span>
                        </p>
                        <p className="fw-bold">
                            <i className="bi bi-telephone text-danger m-1"></i>
                            Phone: <span className="fw-normal">+91 8075126134</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default About;
