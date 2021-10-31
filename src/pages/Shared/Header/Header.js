import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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
                { user?.email &&
                    <NavDropdown title='Dashboard' id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to='/myBookings'>My Booking</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/addPackage'>Add New Package</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/manageAllBookings'>Manage All Bookings</NavDropdown.Item>
                  </NavDropdown>
                }
                { user?.email ?
                    <NavDropdown title={<img className='profile-icon' src={user?.photoURL} alt="" />} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#">{user?.displayName}</NavDropdown.Item>
                    <NavDropdown.Item href="#">{user?.email}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><button onClick={logOut} className='btn btn-danger'>Logout</button></NavDropdown.Item>
                  </NavDropdown>
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