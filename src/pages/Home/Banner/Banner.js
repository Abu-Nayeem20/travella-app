import React from 'react';
import { Carousel } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-style'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/fdWWQfB/slider-1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>7 Days, 8 Nights</h3>
                    <h2>Amazing Tour In Madagascar</h2>
                    <HashLink to='#packages'>
                    <button className='slider-button'>Book Now</button>
                    </HashLink>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/5kRwX6V/slider-2.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>7 Days, 8 Nights</h3>
                    <h2>Amazing Tour In Indonesia</h2>
                    <HashLink to='#packages'>
                    <button className='slider-button'>Book Now</button>
                    </HashLink>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Ybn7Lfz/slider-3.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>7 Days, 8 Nights</h3>
                    <h2>Amazing Tour In Hampshire</h2>
                    <HashLink to='#packages'>
                    <button className='slider-button'>Book Now</button>
                    </HashLink>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/SDjXw9h/slider-4.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>7 Days, 8 Nights</h3>
                    <h2>Amazing Tour In Cox's Bazar</h2>
                    <HashLink to='#packages'>
                    <button className='slider-button'>Book Now</button>
                    </HashLink>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;