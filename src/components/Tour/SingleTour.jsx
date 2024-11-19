import React, { useState, useEffect } from "react";
import "../../styles/SingleTour.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, token } from "../../utils/config";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import userimge from "../../assets/images/avatar.jpg";
import StarIcon from '@mui/icons-material/Star';

const SingleTour = () =>
{
  const { id } = useParams();
  const { data: tour, loading, error } = useFetch( `${ BASE_URL }/tour/getSingleTour/${ id }` );
  const { data: reviews, loadingreview, errors } = useFetch( `${ BASE_URL }/review/getTourReview/${ id }` );

  const [ review, setReview ] = useState( { star: undefined, comments: undefined } );
  const [ rating, setRating ] = useState( 0 );
  const [ hoverRating, setHoverRating ] = useState( 0 );


 

  const handleChange = ( e ) =>
  {
    setReview( ( prev ) => ( { ...prev, [ e.target.id ]: e.target.value } ) );
  };

  const handleClick = ( index ) => setRating( index );
  const handleMouseEnter = ( index ) => setHoverRating( index );
  const handleMouseLeave = () => setHoverRating( 0 );

  const handleSubmit = async ( e ) =>
  {
    e.preventDefault();
    const reviewData = { ...review, star: rating };

    try
    {
      const res = await fetch( `${ BASE_URL }/review/newReview/${ id }`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${ token }`,
        },
        body: JSON.stringify( reviewData ),
      } );

      const result = await res.json();
      toast( result.message );

      if ( result.success )
      {
        setReview( { star: undefined, comments: "" } );
        setRating( 0 );

        window.location.reload();
      }

    } catch ( error )
    {
      toast( "Internal error" );
    }
  };


  const [ numGuests, setNumGuests ] = useState( 1 ); 
  const [ booking, setBooking ] = useState( {
    fullname: undefined,
    phonenumber: undefined,
    bookingDate: undefined,
    guests: numGuests,
    amount: tour?.price * numGuests + 10,
  } );
  useEffect(() => {
    if (tour?.price) {
      setBooking((prev) => ({
        ...prev,
        amount: tour.price * numGuests + 10, 
      }));
    }
  }, [tour, numGuests]);

  const handleGuestChange = ( e ) =>
  {
    const value = parseInt( e.target.value, 10 );
    setNumGuests( value > 0 ? value : 1 ); 
   
  };
  const handleBookingChange = ( e ) =>
  {
    const { id, value } = e.target;
    setBooking( ( prev ) => ( {
      ...prev,
      [ id ]: value,
      amount: id === "guests" ? tour?.price * parseInt( value, 10 ) + 10 : prev.amount,
    } ) );
  }
  const handleBookingSubmit = async ( e ) =>
  {
    e.preventDefault();
    try
    {
      const res = await fetch( `${ BASE_URL }/booking/newBooking/${ id }`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${ token }`,
          },
          body: JSON.stringify( booking ),
        } );
      const result = await res.json();
     // console.log( "booking data:", booking );
      if ( res.ok )
      {

        toast( "Booking Successfull" );

      } else
      {

        toast( result.message || "Failed to book..Check the data" );
      }

    }
    catch ( error )
    {
     // console.log("error",error)
      toast( "Internal error" );
    }
  }



  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        { loading && <h6>Loading...</h6> }
        { error && <h6>{ error }</h6> }

        <div className="col-md-8">
          <div className="mb-4">
            <img
              src={ tour.photo || userimge }
              alt="Tour"
              className="img-fluid rounded shadow w-100"
              style={ { maxHeight: "400px", objectFit: "cover" } }
            />
          </div>
          <div className="mb-4 p-3 border rounded">
            <h4 className="mb-3">{ tour.title }</h4>
            <div className="d-flex align-items-center text-muted">
              <div className="d-flex">
                <div>
                  <i className="bi bi-star-fill text-warning me-2 fs-6"></i>
                  <span className="text-muted">
                    { tour.reviewCount
                      ? `${ tour.reviewRating } (${ tour.reviewCount })`
                      : 'Not rated' }
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3 ms-5">
                  <PersonPinCircleOutlinedIcon className="bi bi-geo-alt text-muted me-2 fs-6" />
                  <span>{ tour.address }</span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center text-muted">
              <div className="d-flex">
                <div className="d-flex align-items-center mb-3 ">
                  <i className="bi bi-geo-alt text-dark me-2 fs-6"></i>
                  <span>{ tour.city }</span>
                </div>
                <div className="d-flex align-items-center mb-3 ms-5">
                  <MonetizationOnOutlinedIcon className="bi bi-star-fill text-muted ms-2 fs-6" />
                  <span className="text-muted">{ tour.price } per person</span>
                </div>
                <div className="d-flex align-items-center mb-3 ms-5">
                  <i className="bi bi-geo-alt-fill text-muted ms-2 fs-6"></i>
                  <span className="text-muted">{ tour.distance } k/m</span>
                </div>
                <div className="d-flex align-items-center mb-3 ms-5">
                  <i className="bi bi-people text-muted ms-2 fs-6"></i>
                  <span className="text-muted">{ tour.maxGroupSize } people</span>
                </div>
              </div>
            </div>

            <div>
              <p><strong>Description:</strong></p>
              <p className="text-muted"> { tour.desc || 'N/A' }</p>
            </div>
          </div>

          <div className="p-3 rounded border">
            <h5 className="mb-3">Reviews ({ tour?.reviewCount || 0 } reviews)</h5>
            <form onSubmit={ handleSubmit }>
              <div className="mb-3">
                <div className="star-rating">
                  { [ 1, 2, 3, 4, 5 ].map( ( starIndex ) => (
                    <FaStar
                      key={ starIndex }
                      size={ 30 }
                      color={ starIndex <= ( hoverRating || rating ) ? "#ffc107" : "#e4e5e9" }
                      onClick={ () => handleClick( starIndex ) }
                      onMouseEnter={ () => handleMouseEnter( starIndex ) }
                      onMouseLeave={ handleMouseLeave }
                      style={ { cursor: "pointer", margin: "0 5px" } }
                    />
                  ) ) }
                </div>
              </div>
              <textarea
                className="form-control border-0"
                id="comments"
                placeholder="Share Your Thoughts"
                required
                value={ review.comments }
                onChange={ handleChange }
              />
              <button type="submit" className="btn btn-warning text-white mt-3">
                Submit
              </button>
            </form>
            { loadingreview && <h6>Loading...</h6> }
            { errors && <h6>{ errors }</h6> }

            { reviews?.length > 0 ? (
              [ ...reviews ].reverse().map( ( review ) =>
              {

                const formattedDate = new Date( review.createdAt ).toLocaleDateString( "en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                } );

                return (
                  <div key={ review._id } className="row align-items-center mt-3 p-3">

                    <div className="col-1">
                      <img
                        src={ userimge }
                        alt="user"
                        className="img-fluid"
                        style={ { width: "50px", height: "50px", objectFit: "cover" } }
                      />
                    </div>

                    <div className="col-4">
                      <h5 className="mb-1">{ review.user.name }</h5>
                      <p className="text-muted mb-0">{ formattedDate }</p>
                      <p className="text-muted mb-0">{ review.comments }</p>
                    </div>

                    <div className="col-7">
                      <p className="text-end text-warning">{ review.star }<StarIcon /></p>
                    </div>
                  </div>
                );
              } )
            ) : (
              <div>No reviews available</div>
            ) }
          </div>
        </div>

       
        <div className="col-md-4 mt-4">
          <div className="p-3 rounded shadow ">
            <p className="d-flex "><h4 className="text-dark">{ tour.price } </h4><span className="text-muted">/per person <i className="bi bi-star-fill text-warning me-2 fs-6"></i>
              <span className="text-muted">
                { tour.reviewCount
                  ? `${ tour.reviewRating } (${ tour.reviewCount })`
                  : 'Not rated' }
              </span></span></p>
            <h4 className="mb-3">Information</h4>

            <form onSubmit={ handleBookingSubmit }>
              <div className="border">
                <input
                  type="text"
                  className="form-control mb-3 border-0 border-bottom"
                  placeholder="Enter your name"
                  id="fullname"
                  onChange={ handleBookingChange }
                />
                <input
                  type="text"
                  className="form-control mb-3 border-0 border-bottom"
                  placeholder="Phone Number"
                  id="phone"
                  onChange={ handleBookingChange }
                />
                <input
                  type="number"
                  className="form-control mb-3 border-0 border-bottom"
                  placeholder="Number of guests"
                  value={ numGuests }
                  onChange={ handleGuestChange }
                  id="guests"
                />
                <input type="date" className="form-control mb-3 border-0 border-bottom"
                  id="bookingDate"
                  onChange={ handleBookingChange }
                />

              </div>

              <div className="p-3 border rounded mb-3">
                <div className="row mb-2">
                 
                  <div className="col-6 text-muted">{ tour.price }$ x { numGuests }</div>
                  <div className="col-6 text-end">
                    <span id="rateResult">{ tour.price * numGuests }</span> 
                  </div>
                </div>
                <div className="row mb-2">
                  
                  <div className="col-6 text-muted">Service Charges($)</div>
                  <div className="col-6 text-end">
                    <span id="serviceCharges">10</span>
                  </div>
                </div>
                <div className="row">
                 
                  <div className="col-6 fw-bold">Total</div>
                  <div className="col-6 text-end fw-bold">
                    <span id="totalAmount">${ ( tour.price * numGuests ) + 10 }</span>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-warning text-white w-100">
                Book Now
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
