import React, { useState } from 'react';
import '../../styles/Login.css';
import user from '../../assets/images/user.png';
import login from '../../assets/images/login.png'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/config';
import { toast } from 'react-toastify';
const Login = () => {
  return (
    <div className="container login-container">
    <div className="row">
      <div className="col-12 col-md-6 login-left">
        <img src={ login } alt="background" className="img-fluid" />
      </div>


      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center login-right bg-warning">
        <div className="login-form-container">
          <div className="user-image-container d-flex justify-content-center">
            <img src={ user } alt="Profile" className="user-image" />
          </div>
          <form >
            <h3 className="text-center text-white">Login</h3>
            
            <div className="mb-3">

              <input type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                required
                />
            </div>
            <div className="mb-3">

              <input type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                required
               />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-dark">Login</button>
            </div>

          </form>
          <div className="mb-4 text-white">Don't  have an account? <Link className="text-decoration-none text-dark" to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login