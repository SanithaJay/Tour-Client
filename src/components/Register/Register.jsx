import React from 'react';
import '../../styles/Register.css';
import user from '../../assets/images/user.png'; 
import register from '../../assets/images/register.png'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container register-container">
      <div className="row">
        {/* Left Section with Image */}
        <div className="col-12 col-md-7 register-left">
          <img src={register} alt="background" className="img-fluid" />
        </div>

        {/* Right Section with Circular Image and Form */}
        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center register-right bg-warning">
          <div className="register-form-container">
            <div className="user-image-container d-flex justify-content-center">
              <img src={user} alt="Profile" className="user-image" />
            </div>
            <form>
              <h3 className="text-center text-white">Register</h3>
              <div className="mb-3">
               
                <input type="text" className="form-control" id="username" placeholder="User Name" />
              </div>
              <div className="mb-3"> 
               
                <input type="email" className="form-control" id="email" placeholder="Email" />
              </div>
              <div className="mb-3">
               
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-dark">Creat Account</button>
              </div>
             
            </form>
            <div className="mb-4 text-white">Already You have an account? <Link className="text-decoration-none text-dark" to="/login">Login</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
