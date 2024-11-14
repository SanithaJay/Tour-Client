import React, { useContext, useState } from 'react';
import '../../styles/Login.css';
import user from '../../assets/images/user.png';
import login from '../../assets/images/login.png'
import { Link,  useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/config';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

const Login = () =>
{

    const [ credentials, setCredentials ] = useState( {

        email: undefined,
        Password: undefined,

    } );

    const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext );

    const handleChange = ( e ) =>
    {
        setCredentials( ( prev ) => ( { ...prev, [ e.target.id ]: e.target.value } ) );
    };

    const handleSubmit = async ( e ) =>
    {
        e.preventDefault();
        dispatch( { type: "LOGIN_START" } );
        try
        {
            const res = await fetch( `${ BASE_URL }/auth/login`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                credentials: "include",
                body: JSON.stringify( credentials ),
            } );
            const result = await res.json();
            console.log("result",result);
            dispatch( {
                type: "LOGIN_SUCCESS",
                payload: result.data,
                token: result.token,
                role: result.role,
            } );

            if(result.success===true){
                toast.success("Login Successsful");
                navigate("/");
            }
            else{
                toast.error("Login Failed")
            }
        }
        catch ( error )
        {
            dispatch( { type: "LOGIN_FAILURE", payload: error.message } );
        }

    };

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
                        <form onSubmit={handleSubmit}>
                            <h3 className="text-center text-white">Login</h3>

                            <div className="mb-3">

                                <input type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">

                                <input type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    required
                                    onChange={handleChange}
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