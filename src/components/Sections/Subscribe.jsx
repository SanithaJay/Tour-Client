import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import { BASE_URL } from '../../utils/config';
import '../../styles/Subscribe.css';
import tourist from '../../assets/images/male-tourist.png';
import { toast } from "react-toastify";

const Subscribe = () =>
{

    const [ credentials, setCredentials ] = useState( {
        email: undefined,
    } );

    const navigate = useNavigate();

    const handleChange = ( e ) =>
    {
        setCredentials( ( prev ) => ( { ...prev, [ e.target.id ]: e.target.value } ) );
    };

    const handleClick = async ( e ) =>
    {
        e.preventDefault();
        try
        {
            const res = await fetch( `${ BASE_URL }/subscribe/newSubscribe`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify( credentials ),

            } );
            const result = await res.json();
            if (res.ok) {
                setCredentials({email:''})
                toast("Email added for subscription");
                navigate("/");
            } else {
                setCredentials({email:''})
                toast(result.message || "Failed to subscribe");
            }
        }
        catch ( error )
        {
            console.log( "Error form", error );
            toast( "Internal Server Error" )
        }
    }


    return (
        <>
            <div className="container-fluid fillColor mt-2 col-12 row no-gutters">
               
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className="subscribe-align">
                        <h3 className="subscribe-heading">Subscribe now for useful travelling information.</h3>
                    </div>
                    <div className="subscribe-form subscribe-align">
                        <form onSubmit={ handleClick }>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Enter your mail"
                                id="email"
                                className="subscribe-textbox"
                                value={credentials.email}
                                onChange={ handleChange } />
                            <button className="btn btn-warning text-white subscribe-btn" type="submit">Subscribe</button>
                        </form>
                    </div>
                    <div className="subscribe-align">
                        <p className="mt-4 text-black subscribe-p">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit.Quia odio iure quasi! Deserunt, similique in!
                        </p>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <img src={ tourist } alt="tourist" className="tourist-image" />
                </div>
            </div>
        </>
    );
};

export default Subscribe;
