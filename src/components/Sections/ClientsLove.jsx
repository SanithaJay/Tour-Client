import React from 'react';
import '../../styles/ClientsLove.css';
import Slider from 'react-slick';
import customer1 from '../../assets/images/ava-1.jpg';
import customer2 from '../../assets/images/ava-2.jpg';
import customer3 from '../../assets/images/ava-3.jpg';


const ClientsLove = () =>
{

  const comments = "Lorem ipsum dolor sit amet consectetur adipiscing elit.Perspiciats,nemo! Velit facilis magni ab,animi odio vitae! Numquam odit, tempora soluta ,sequi est illum fugiat magni earum repudiandae laudantium voluptatum! ";
  const reviews = [
    { id: 1, image: customer1, name: "Jhon Doe" },
    { id: 2, image: customer2, name: "Catherin Jo" },
    { id: 3, image: customer3, name: "Peter Alice" },
    { id: 4, image: customer2, name: "Catherin Jo" },
    { id: 5, image: customer3, name: "Peter Alice" },
    { id: 6, image: customer1, name: "Jhon Doe" },
    { id: 7, image: customer3, name: "Peter Alice" },
    { id: 8, image: customer1, name: "Jhon Doe" },
    { id: 9, image: customer1, name: "Jhon Doe" },
    { id: 10, image: customer1, name: "Jhon Doe" },
    { id: 11, image: customer1, name: "Jhon Doe" },
    { id: 12, image: customer2, name: "Catherin Jo" },
  ];

  const groupedReviews = [];
  for ( let i = 0; i < reviews.length; i += 3 )
  {
    groupedReviews.push( reviews.slice( i, i + 3 ) );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h6 className="fontFamily p-2 rounded-pill bg-warning client">
            Client's Love
          </h6>
          <div className="col-md-12 mt-2">
            <h2>What our client's say about us</h2>
          </div>
        </div>
      </div>
      <div className='mt-2 '>
        <Slider { ...settings }>
          { groupedReviews.map( ( group, index ) => (
            <div className="review-slide" key={ index }>
              <div className="review-content d-flex justify-content-start">
                { group.map( ( review ) => (
                  <div className="review-item col-md-4 " key={ review.id }>
                    <p className="comment">{ comments }</p>
                    <div className="d-flex align-items-center">
                      <img src={ review.image } alt={ review.name } className="review-image" />
                      <div className=" align-items-center"><h6 className="name ms-3">{ review.name }</h6>
                        <p className="customer">Customer</p>
                      </div>
                    </div>
                  </div>
                ) ) }
              </div>
            </div>
          ) ) }
        </Slider>

      </div>
    </div>
  )
}

export default ClientsLove