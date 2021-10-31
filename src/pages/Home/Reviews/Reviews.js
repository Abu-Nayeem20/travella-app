import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Reviews.css';

const Reviews = () => {
    return (
        <div className='container'>
            <div className='section-heading'>
                <h5>Read The Top</h5>
                <h2>Travel Reviews</h2>
                </div>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                    <Carousel className='slider'>
                <Carousel.Item interval={1000} className='slider-item'>
                    <img
                    className="slider-img"
                    src="https://i.ibb.co/Y2rYNPP/user-img-3.png"
                    alt="slide" />
                    <h3>Shawon Khan</h3>
                    <h5 className='h3'>Travellar</h5>
                    <p><span><i className="fas fa-quote-left fs-3"></i></span> Even the most foreign country or faraway places aren’t light years away. The journey may appear long and intimidating, but when you take one step at a time, it’s manageable.</p>
                </Carousel.Item>
                <Carousel.Item interval={1000} className='slider-item'>
                    <img
                    className="slider-img"
                    src="https://i.ibb.co/Yd22GwQ/user-img-7.png"
                    alt="slide" />
                    <h3>Rina Khan</h3>
                    <h5 className='h3'>Travellar</h5>
                    <p><span><i className="fas fa-quote-left fs-3"></i></span> Even the most foreign country or faraway places aren’t light years away. The journey may appear long and intimidating, but when you take one step at a time, it’s manageable.</p>
                </Carousel.Item>
                <Carousel.Item interval={1000} className='slider-item'>
                    <img
                    className="slider-img"
                    src="https://i.ibb.co/1Lh9fJB/user-img-4.png"
                    alt="slide" />
                    <h3>Anny Taylor</h3>
                    <h5 className='h3'>Travellar</h5>
                    <p><span><i className="fas fa-quote-left fs-3"></i></span> Even the most foreign country or faraway places aren’t light years away. The journey may appear long and intimidating, but when you take one step at a time, it’s manageable.</p>
                </Carousel.Item>
                <Carousel.Item interval={1000} className='slider-item'>
                    <img
                    className="slider-img"
                    src="https://i.ibb.co/Qns7fc9/user-img-6.png"
                    alt="slide" />
                    <h3>James Anderson</h3>
                    <h5 className='h3'>Travellar</h5>
                    <p><span><i className="fas fa-quote-left fs-3"></i></span> Even the most foreign country or faraway places aren’t light years away. The journey may appear long and intimidating, but when you take one step at a time, it’s manageable.</p>
                </Carousel.Item>
                <Carousel.Item interval={1000} className='slider-item'>
                    <img
                    className="slider-img"
                    src="https://i.ibb.co/THQvwY4/user-img-5.png"
                    alt="slide" />
                    <h3>Mr. William</h3>
                    <h5 className='h3'>Travellar</h5>
                    <p><span><i className="fas fa-quote-left fs-3"></i></span> Even the most foreign country or faraway places aren’t light years away. The journey may appear long and intimidating, but when you take one step at a time, it’s manageable.</p>
                </Carousel.Item>
                <Carousel.Item interval={1000} className='slider-item'>
                    <img
                    className="slider-img"
                    src="https://i.ibb.co/WG3t9Bw/reviewer-1-07859027.png"
                    alt="slide" />
                    <h3>Dina James</h3>
                    <h5 className='h3'>Travellar</h5>
                    <p><span><i className="fas fa-quote-left fs-3"></i></span> Even the most foreign country or faraway places aren’t light years away. The journey may appear long and intimidating, but when you take one step at a time, it’s manageable.</p>
                </Carousel.Item>
                </Carousel>
                    </div>
                </div>
        </div>
    );
};

export default Reviews;