import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from '../../utils/config';
import { toast } from 'react-toastify';

const SearchTour = () =>
{
    const location = useLocation(); 
    const [ tourData, setTourData ] = useState( [] );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState( null );

    useEffect( () =>
    {
        
        const params = new URLSearchParams( location.search );
        const city = params.get( 'city' ) || '';
        const distance = params.get( 'distance' ) || '';
        const maxGroupSize = params.get( 'maxGroupSize' ) || '';
        //console.log( "params:", params, "city:", city, "distance:", distance, "maxsize", maxGroupSize )

        const fetchSearchResults = async () =>
        {
            try
            {
                setLoading( true );
                const response = await fetch( `${ BASE_URL }/tour/searchTours?city=${ city }&distance=${ distance }&maxGroupSize=${ maxGroupSize }` );
               // console.log( `${ BASE_URL }/tour/searchTours?city=${ city }&distance=${ distance }&maxGroupSize=${ maxGroupSize }` )
                const result = await response.json();
                if ( result.success )
                {
                    setTourData( result.data );
                } else
                {
                    toast( result.message || 'No Data Found' );
                }
            } catch ( err )
            {
                setError( err.message );
                toast( 'Error fetching search results' );
            } finally
            {
                setLoading( false );
            }
        };

        fetchSearchResults();
    }, [ location.search ] );

    if ( loading ) return <h6>Loading...</h6>;
    if ( error ) return <h6>{ error }</h6>;

    return (
        <div className="container">
            <h2>Search Results</h2>
            <div className="row">
                { tourData.length > 0 ? (
                    tourData.map( ( tour ) => (
                        <div key={ tour._id } className="col-md-3 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="position-relative">
                                    <img
                                        src={ tour.photo }
                                        alt={ tour.title }
                                        className="card-img-top card-image"
                                    />
                                    { tour.featured && (
                                        <span className="position-absolute bottom-0 end-0 m-0 bg-warning text-white p-0">
                                            Featured
                                        </span>
                                    ) }
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <div className="d-flex">
                                            <span className="text-warning mr-2">
                                                <i className="bi bi-geo-alt"></i>
                                            </span>
                                            <span className="fw-bold">{ tour.city }</span>
                                        </div>
                                        <div className="d-flex ml-auto">
                                            <span className="text-warning">
                                                <i className="bi bi-star"></i>
                                            </span>
                                            <span className="text-muted ml-1">
                                                { tour.reviewCount ? `${ tour.reviewRating } (${ tour.reviewCount })` : 'Not rated' }
                                            </span>
                                        </div>
                                    </div>

                                    <h5 className="card-title">{ tour.title }</h5>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="text-warning">
                                            ${ tour.price } <span className="text-muted">/per person</span>
                                        </h6>
                                        <button className="btn btn-warning btn-sm text-white">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) )
                ) : (
                    <p>No tours found for the given search criteria.</p>
                ) }
            </div>
        </div>
    );
};

export default SearchTour;
