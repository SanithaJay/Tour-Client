import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"

const Header = () =>
{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <Link className="navbar-brand" to="/" style={ { marginLeft: '130px' } }>
                        <img src={ logo } alt="logo" style={ { width: '180px' } } /></Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto " style={ { marginRight: '60px', display: 'flex', gap: '20px' } }>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/"
                                    style={ ( { isActive } ) => ( {
                                        color: isActive ? '#ffc107' : 'black',
                                        fontWeight: 500
                                    } ) }>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tours"
                                    style={ ( { isActive } ) => ( {
                                        color: isActive ? '#ffc107' : 'black',
                                        fontWeight: 500
                                    } ) }>Tours</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login"
                                    style={ ( { isActive } ) => ( {
                                        color: isActive ? '#ffc107' : 'black',
                                        fontWeight: 500
                                    } ) }>Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-warning "
                                    style={ { color: 'white', borderRadius: '20px', minWidth: '120px' } } to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;