import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/travella.png';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    const activeStyle ={
        color: "#a7e0f8",
        // borderBottom: '2px solid #a7e0f8'
      }
    return (
        <div>
            <div className="header-section">
            <Navbar collapseOnSelect expand="lg" sticky="top">
            <Container>
            <Navbar.Brand className='logo-area' as={NavLink} to="/home"><img className='img-fluid' src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                <Nav className="menu-items">
                <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#packages">Our Packages</Nav.Link>
                <Nav.Link as={NavLink} activeStyle={activeStyle} to="/contact">Contact</Nav.Link>
                { user.email ?
                    <button onClick={logOut}>Logout</button>
                  :  <Nav.Link as={NavLink} activeStyle={activeStyle} to="/signup">Sign Up</Nav.Link>
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>

        </div>
    );
};

export default Header;