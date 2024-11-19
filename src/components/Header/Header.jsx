import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "../../styles/Header.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Header = () => {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/home");
        window.scrollTo(0, 0);
    };

    const logoutHandler = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };

    return (
        <Navbar collapseOnSelect expand="lg" className="custom-navbar">
            <Container>
                <Link className="navbar-brand custom-brand" to="/" onClick={handleHomeClick}>
                    <img src={logo} alt="logo" className="logo-img" />
                </Link>

                {/* Toggler button to collapse on smaller screens */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto custom-nav">
                        <Nav.Link as={NavLink} to="/home" className="nav-link" >
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/tours" className="nav-link">
                            Tours
                        </Nav.Link>
                        {user ? (
                            <>
                                <Nav.Link as={NavLink} to="/" onClick={logoutHandler} className="nav-link">
                                    Logout
                                </Nav.Link>
                                <Nav.Item>
                                    <Button className="btn btn-warning register-btn" as={Link} to="/edit" >
                                        {user.name}
                                    </Button>
                                </Nav.Item>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={NavLink} to="/login" className="nav-link">
                                    Login
                                </Nav.Link>
                                <Nav.Item>
                                    <Button className="btn btn-warning register-btn" as={Link} to="/register">
                                        Register
                                    </Button>
                                </Nav.Item>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
