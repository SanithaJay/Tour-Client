import React from 'react';
import '../../styles/KnowBefore.css';
import world from '../../assets/images/world.png';
import image1 from '../../assets/images/hero-img01.jpg';
import image3 from '../../assets/images/hero-img02.jpg';
import videoSrc from '../../assets/videos/waterfall.mp4';
const KnowBefore = () =>
{
    return (
        <div className="container knowbefore-container" >
            <div className="row">

                <div className="col-md-6 mt-5">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center mb-3">
                            <h6 className="fontFamily p-2 rounded-pill bg-warning know-before">
                                Know before you go
                            </h6>
                            <img src={ world } alt="icon" className="world-icon" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h1 className="knowbefore-title">
                                Travelling opens the doors to creating{ ' ' }
                                <span className="highlight">memories</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-4 knowbefore-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                            consequatur dolore nam modi labore facere id ut veniam itaque
                            quasi, sunt unde? Mollitia id soluta animi repudiandae omnis
                            quibusdam illo blanditiis possimus ex sint cupiditate corrupti
                            labore non, qui est porro excepturi quasi labor.
                        </div>
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="row">

                        <div className="col-12 col-md-4 mb-4 ">
                            <div className="card knowbefore-card card1" >
                                <img src={ image1 } alt="nature beauty" className="card-img-top" />
                            </div>
                        </div>


                        <div className="col-12 col-md-4 mb-4">
                            <div className="card knowbefore-card card2" >
                                <video className="card-img-top" controls>
                                    <source src={ videoSrc } type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-4">
                            <div className="card knowbefore-card card3" >
                                <img src={ image3 } alt="nature beauty" className="card-img-top" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowBefore;
