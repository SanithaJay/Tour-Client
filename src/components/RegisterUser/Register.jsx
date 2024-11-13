import React, { useState } from 'react';
import '../../styles/Register.css';
import user from '../../assets/images/user.png';
import register from '../../assets/images/register.png'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/config';
import { toast } from 'react-toastify';

const Register = () =>
{

  const [ credentials, setCredentials ] = useState( {
    name: undefined,
    email: undefined,
    password: undefined,
  } );

  const navigate = useNavigate();

  const handleChange = ( e ) =>
  {
    setCredentials( ( prev ) => ( { ...prev, [ e.target.id ]: e.target.value } ) );
  };
  console.log( "credentials", credentials );
  const handleSubmit = async ( e ) =>
  {

    e.preventDefault();
    try
    {
      const res = await fetch( `${ BASE_URL }/auth/newUser`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify( credentials ),
      } )
      const result = await res.json();
      setCredentials( { name: '', email: '', password: '' } );
      if ( result.ok )
      {
        toast( "User registration completed" );
        navigate( "/" );
      } else
      {
        toast( result.message || "Email Already Exists.Please Login." );
      }


    }
    catch ( error )
    {
      toast( "Internal Error!!!Please Try Again" );
    }
  }



  return (
    <div className="container register-container">
      <div className="row">
        <div className="col-12 col-md-7 register-left">
          <img src={ register } alt="background" className="img-fluid" />
        </div>


        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center register-right bg-warning">
          <div className="register-form-container">
            <div className="user-image-container d-flex justify-content-center">
              <img src={ user } alt="Profile" className="user-image" />
            </div>
            <form onSubmit={ handleSubmit }>
              <h3 className="text-center text-white">Register</h3>
              <div className="mb-3">
                <input type="text"
                  className="form-control"
                  id="name"
                  placeholder="User Name"
                  required
                  value={ credentials.name }
                  onChange={ handleChange } />
              </div>
              <div className="mb-3">

                <input type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  required
                  value={ credentials.email }
                  onChange={ handleChange } />
              </div>
              <div className="mb-3">

                <input type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  required
                  value={ credentials.password }
                  onChange={ handleChange } />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-dark">Create Account</button>
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
