import React from 'react';
import logo from '../../../images/travella.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div>
                            <img className='img-fluid' src={logo} alt="" />
                            <p className='text-light py-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div className='col-md-4 text-center'>
                        <h3 className='title-text'>Contact Us</h3>
                        <div className='contact-item d-flex justify-content-center'>
                        <i className="fas fa-phone me-3"></i>
                        <p>+880 123456789</p>
                        </div>
                        <div className='contact-item d-flex justify-content-center'>
                        <i className="fas fa-envelope me-3"></i>
                        <p>example@gmail.com</p>
                        </div>
                        <div className='contact-item d-flex justify-content-center'>
                        <i className="fas fa-map-marker-alt me-3"></i>
                        <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className='col-md-4 text-center'>
                        <h3 className='title-text'>Support</h3>
                        <div className='support-item'>
                            <p>Contact Us</p>
                            <p>About Us</p>
                            <p>Packages</p>
                            <p>Our Blogs</p>
                        </div>
                    </div>
                </div>
                <div className='follow-us'>
                     <h4>Follow Us</h4>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-instagram-square"></i>
                    </div>
            </div>
            <div className='copyright-text'>
                <p><i className="fas fa-copyright"></i> Copyright <span>Travella</span> 2021 | Developed by Nayeem</p>
            </div>
        </div>
    );
};

export default Footer;