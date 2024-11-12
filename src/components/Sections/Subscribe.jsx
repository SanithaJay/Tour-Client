import React from 'react';
import '../../styles/Subscribe.css';
import tourist from '../../assets/images/male-tourist.png';

const Subscribe = () => {
  return (
    <>
      <div className="container-fluid fillColor mt-5 col-12 row no-gutters">
        {/* Left side content */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="subscribe-align">
            <h3 className="subscribe-heading">Subscribe now for useful travelling information.</h3>
          </div>
          <div className="subscribe-form subscribe-align">
            <form>
              <input type="email" name="email" placeholder="Enter your mail" className="subscribe-textbox" />
              <button className="btn btn-warning text-white subscribe-btn" type="submit">Subscribe</button>
            </form>
          </div>
          <div className="subscribe-align">
            <p className="mt-4 text-black subscribe-p">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.Quia odio iure quasi! Deserunt, similique in!
            </p>
          </div>
        </div>

        {/* Right side image */}
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          <img src={tourist} alt="tourist" className="tourist-image" />
        </div>
      </div>
    </>
  );
};

export default Subscribe;
