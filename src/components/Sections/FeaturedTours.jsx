import React from 'react';
import '../../styles/Featured_Tour.css';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';
import { Link, useNavigate } from 'react-router-dom';

const FeaturedTours = () => {
  const { data: tourData, loading, error } = useFetch(`${BASE_URL}/tour/getAllTour`);

 const navigate=useNavigate();
  const isValidTourData = Array.isArray(tourData) && tourData.length > 0;
  const limitedTours = isValidTourData ? tourData.filter(tour => tour.featured).slice(0, 8) : [];

  const handleBookNowClick = (id) => {
    navigate(`/tour/${id}`);
  };


  return (
    <div className="container">
      <div className="row">
        <div>
          <h6 className="fontFamily p-2 rounded-pill bg-warning explore">Explore</h6>
          <h2>Our Featured Tours</h2>

          {loading && <h6>Loading...</h6>}
          {error && <h6>{error}</h6>}

          <div className="row mt-5">
            {limitedTours.length > 0 ? (
              limitedTours.map((tour) => (
                <div key={tour._id} className="col-md-3 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="position-relative">
                      <img
                        src={tour.photo}
                        alt={tour.title}
                        className="card-img-top card-image"
                      />
                      <span className="position-absolute bottom-0 end-0 m-0 bg-warning text-white p-0">
                        Featured
                      </span>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex">
                          <span className="text-warning mr-2">
                            <i className="bi bi-geo-alt"></i>
                          </span>
                          <span className="fw-bold">{tour.city}</span>
                        </div>
                        <div className="d-flex ml-auto">
                          <span className="text-warning">
                            <i className="bi bi-star"></i>
                          </span>
                          <span className="text-muted ml-1">
                            {tour.reviewCount
                              ? `${tour.reviewRating} (${tour.reviewCount})`
                              : 'Not rated'}
                          </span>
                        </div>
                      </div>

                      <h5 className="card-title">
                        <Link
                         to={`/tour/${tour._id}`}
                          className="tour-title-link"
                        >
                          {tour.title}
                        </Link>
                      </h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="text-warning">
                          ${tour.price} <span className="text-muted">/per person</span>
                        </h6>
                        <button className="btn btn-warning btn-sm text-white" onClick={() => handleBookNowClick(tour._id)}>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h6 className="text-center">No featured tours available</h6>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTours;
