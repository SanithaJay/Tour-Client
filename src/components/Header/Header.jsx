import { Link, NavLink ,useNavigate} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import '../../styles/Header.css';  

const Header = () => {

    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate("/home"); 
        window.scrollTo(0, 0); 
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                <div className="container " >
                    <Link className="navbar-brand custom-brand" to="/" onClick={handleHomeClick}>
                        <img src={logo} alt="logo" className="logo-img" />
                    </Link>
                   
                    <div className="collapse navbar-collapse " id="navbarNav" >
                        <ul className="navbar-nav ms-auto custom-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home" activeClassName="active-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tours" activeClassName="active-link">Tours</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login" activeClassName="active-link">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-warning register-btn" to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
