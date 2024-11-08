import React from 'react';
import world from '../../assets/images/world.png';
import image1 from '../../assets/images/hero-img01.jpg';
import image3 from '../../assets/images/hero-img02.jpg'; 
import videoSrc from '../../assets/videos/waterfall.mp4'; 
const Section1 = () =>
{
    return (
        <div className="container" style={ { marginTop: '80px' } }>
            <div className="row">
        
                <div className="col-md-6 mt-5">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center mb-3">
                            <h6
                                className="fontFamily p-2 rounded-pill bg-warning"
                                style={ {
                                    padding: '0.3rem 3rem',
                                    width: 'fit-content',
                                    textAlign: 'justify',
                                    fontStyle: 'italic',
                                } }
                            >
                                Know before you go
                            </h6>
                            <img
                                src={ world }
                                alt="icon"
                                style={ { width: '40px', height: '40px', marginLeft: '3px' } }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h1
                                style={ {
                                    fontSize: '3.1rem',
                                    marginBottom: '10px',
                                } }
                            >
                                Travelling opens the doors to creating <span style={ { color: '#ffc107' } }>memories</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-4" style={ { color: 'rgba(158,157,154,255)', fontSize: '18px', lineHeight: '1.8em' } }>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur dolore nam modi labore facere id ut veniam itaque quasi, sunt unde? Mollitia id soluta animi repudiandae omnis quibusdam illo blanditiis possimus ex sint cupiditate corrupti labore non, qui est porro excepturi quasi labor.
                        </div>
                    </div>
                </div>

               
                <div className="col-md-6">
                    <div className="row">
                       
                        <div className="col-12 col-md-4 mb-4 ">
                            <div className="card  "
                                style=
                                { {
                                    height: '350px',
                                    borderRadius: '15px'
                                    , borderColor: '#ffc107',
                                    overflow: 'hidden',
                                    marginTop: "30px"
                                } }>
                                <img src={ image1 } alt="nature beauty" className="card-img-top" style={ { height: '100%', objectFit: 'cover' } } />
                            </div>
                        </div>

                      
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card " style={ {
                                height: '350px',
                                borderRadius: '15px',
                                borderColor: '#ffc107',
                                overflow: 'hidden',
                                marginTop: "50px"
                            } }>
                                <video className="card-img-top" controls style={{ height: '100%', objectFit: 'cover' }}>
  <source src={videoSrc} type="video/mp4" />
  Your browser does not support the video tag.
</video>

                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-4">
                            <div className="card"
                                style={ {
                                    height: '350px',
                                    borderRadius: '15px',
                                    borderColor: '#ffc107',
                                    overflow: 'hidden',
                                    marginTop: '70px'
                                } }>
                                <img src={ image3 } alt="nature beauty" className="card-img-top" style={ { height: '100%', objectFit: 'cover' } } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
