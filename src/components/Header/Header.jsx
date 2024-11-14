import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import '../../styles/Header.css';
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Header = () =>
{

    const { user, dispatch } = useContext( AuthContext );
    console.log( "user", user );

    const navigate = useNavigate();
    const handleHomeClick = () =>
    {
        navigate( "/home" );
        window.scrollTo( 0, 0 );
    };

    const logoutHandler = () =>
    {
        console.log( "logout" );
        dispatch( { type: "LOGOUT" } );
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                <div className="container " >
                    <Link className="navbar-brand custom-brand" to="/" onClick={ handleHomeClick }>
                        <img src={ logo } alt="logo" className="logo-img" />
                    </Link>

                    <div className="collapse navbar-collapse " id="navbarNav" >
                        <ul className="navbar-nav ms-auto custom-nav">
                            <li className="nav-item">
                                <NavLink
                                    className={ ( { isActive } ) =>
                                        isActive ? "nav-link active-link" : "nav-link"
                                    }
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={ ( { isActive } ) =>
                                        isActive ? "nav-link active-link" : "nav-link"
                                    }
                                    to="/tours"
                                >
                                    Tours
                                </NavLink>
                            </li>
                            { user ? ( <><li className="nav-item">
                                <NavLink
                                    className={ ( { isActive } ) =>
                                        isActive ? "nav-link active-link" : "nav-link"
                                    }
                                    to="/"
                                    onClick={ logoutHandler }
                                >
                                    Logout
                                </NavLink>
                            </li>
                                <li className="nav-item">
                                    <Link className="btn btn-warning register-btn" to="/edit">{ user.name }</Link>
                                </li></> ) : ( <><li className="nav-item">
                                    <NavLink
                                        className={ ( { isActive } ) =>
                                            isActive ? "nav-link active-link" : "nav-link"
                                        }
                                        to="/login"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                    <li className="nav-item">
                                        <Link className="btn btn-warning register-btn" to="/register">Register</Link>
                                    </li></> )

                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
