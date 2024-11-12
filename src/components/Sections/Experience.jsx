import React from 'react';
import '../../styles/Experience.css';
import experience from '../../assets/images/experience.png';

const Experience = () =>
{
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div >
                        <h6 className="fontFamily p-2 rounded-pill bg-warning experience">
                            Experience
                        </h6>
                        <div className="col-7">
                            <h2>With our all experience we will serve you</h2>
                        </div>
                        <div className="text-muted col-7 fontSize">
                            Lorem ipsum dolor sit ,amet consectetur adipisicing elit.
                            Officiis iure molestiae dolorem,repellendus blanditiis.
                        </div>
                        <div className="row col-md-8 mt-4">
                            <div className="d-flex justify-content-between">
                                <div className="text-center">
                                    <div className="square-block mx-3 text-white bg-warning d-flex align-items-center justify-content-center">
                                        12k+
                                    </div>
                                    <p className="mt-2 text-muted">Succesful Trips</p>
                                </div>
                                <div className="text-center">
                                    <div className="square-block mx-4 text-white bg-warning d-flex align-items-center justify-content-center">
                                        2k+
                                    </div>
                                    <p className="mt-2 text-muted">Regular clients</p>
                                </div>
                                <div className="text-center">
                                    <div className="square-block mx-4 text-white bg-warning d-flex align-items-center justify-content-center">
                                        15
                                    </div>
                                    <p className="mt-2 text-muted">Years experience</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <img src={ experience } alt='experience' />
                </div>
            </div>
        </div>
    )
}

export default Experience