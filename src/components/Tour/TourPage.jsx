import React, { useState } from 'react';
import Search from '../Sections/Search';
import '../../styles/Tour.css';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';
import { Link, useNavigate } from 'react-router-dom';

const ITEMS_PER_PAGE = 8; 

const TourPage = () => {
  const { data: tourData, loading, error } = useFetch(`${BASE_URL}/tour/getAllTour`);
  
  const [currentPage, setCurrentPage] = useState(1);

  const navigate=useNavigate();

  const isValidTourData = Array.isArray(tourData) && tourData.length > 0;

  
  const totalPages = isValidTourData ? Math.ceil(tourData.length / ITEMS_PER_PAGE) : 0;

  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = isValidTourData ? tourData.slice(startIndex, endIndex) : [];

  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleBookNowClick = (id) => {
    navigate(`/tour/${id}`);
  };

  return (
    <>
      <div className="tour-bg text-lg-center text-white fw-bold tour-font">All Tours</div>
      <div className="tour-search">
        <Search />
      </div>

      <div className="container">
        <div className="row">
          <div>
            {loading && <h6>Loading...</h6>}
            {error && <h6>{error}</h6>}

            <div className="row mt-5">
              {currentData.map((tour) => (
                <div key={tour._id} className="col-md-3 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="position-relative">
                      <img
                        src={tour.photo}
                        alt={tour.title}
                        className="card-img-top card-image"
                      />
                      {tour.featured && (
                        <span className="position-absolute bottom-0 end-0 m-0 bg-warning text-white p-0">
                          Featured
                        </span>
                      )}
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
                            {tour.reviewCount ? `${tour.reviewRating} (${tour.reviewCount})` : 'Not rated'}
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
                        <button className="btn btn-warning btn-sm text-white"  onClick={() => handleBookNowClick(tour._id)}>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          
            {isValidTourData && (
             <nav className="mt-4">
             <ul className="pagination justify-content-center">
               {Array.from({ length: totalPages }, (_, index) => (
                 <li
                   key={index}
                   className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
                 >
                   <button
                     className="page-link tour-pagination"
                     onClick={() => handlePageChange(index + 1)}
                   >
                     {index + 1}
                   </button>
                 </li>
               ))}
             </ul>
           </nav>
           
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TourPage;
