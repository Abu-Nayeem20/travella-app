import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { useRef } from 'react';
import './Booking.css'
import Subscribe from '../Shared/Subscribe/Subscribe';

const Booking = () => {
    const {packageId} = useParams();
    const [booking, setBooking] = useState([]);
    const [smShow, setSmShow] = useState(false);
    const phoneRef = useRef();
    const ticketRef = useRef();
    const dateRef = useRef();
    const personsRef = useRef();
    const commentRef = useRef();


    const {user} = useAuth();


    useEffect( () => {
        const url = `https://blooming-castle-55027.herokuapp.com/packages/${packageId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setBooking(data);
        });
    }, []);

    console.log(booking)

    const handleBooking = e => {
        const name = user.displayName;
        const email = user.email;
        const phone = phoneRef.current.value;
        const ticket = ticketRef.current.value;
        const date = dateRef.current.value;
        const person = personsRef.current.value;
        const comment = commentRef.current.value;
        const location = booking.location;
        const price = booking.price;
        const duration = booking.duration;

        const newBooking ={name, email, phone, ticket, date, person, location, price, duration, comment};

        fetch('https://blooming-castle-55027.herokuapp.com/bookings', {
               method: 'POST',
               headers: {
                   'content-type' : 'application/json'
               },
               body: JSON.stringify(newBooking)
           })
           .then(res => res.json())
           .then(data => {
            if(data.insertedId){
                setSmShow(true);
                e.target.reset();
              }
           });



        e.preventDefault();
    }

    return (
            <div> 
                {/* boooking form  */}
                <div className='booking-form-area'>
                <div className='container'>
                <div className='overlay'>
                <h2 className='booking-page-title'>Book This Package</h2>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                    <Form onSubmit={handleBooking}>
                    <Form.Control size="lg" className='mb-3' type="text" placeholder="Your Name" readOnly value={user?.displayName || ''} required />
                    <Form.Control size="lg" className='mb-3' type="email" placeholder="Your email" readOnly value={user?.email || ''} required />
                    <Form.Control size="lg" ref={phoneRef} className='mb-3' type="text" placeholder="Your Phone" required />
                    <Form.Select size="lg" className='mb-3' ref={ticketRef} required>
                        <option>Travel With Bus</option>
                        <option>Travel With Plane</option>
                    </Form.Select>
                    <Form.Control size="lg" className='mb-3' type="date" ref={dateRef} required />
                    <Form.Control size="lg" ref={personsRef} className='mb-3' type="text" placeholder="How Many Person?" required />
                    <Form.Control as="textarea" ref={commentRef} className='mb-3' placeholder="What's on your mind? Write us..."
                        style={{ height: '150px' }} />
                    <Button className='booking-button' type="submit">
                       Booking
                    </Button>
                    </Form>
                    </div>
                </div>
                </div>
                </div>
                </div>
                {/* boooking package info */}
                <div className='container'>
                <div className='booking-package-info'>
                <h2><i className="fas fa-map-marker-alt"></i> { booking.location}</h2>
               <h4 className='booking-info'> <i class="fas fa-info"></i> Information</h4>
                <div className='text-center overflow-hidden'>
                    <img src={booking.thumbnail} alt="" />
                </div>
                <div className='d-flex justify-content-around'>
                <h5 className='booking-price'>{booking.price}</h5>
                <h5 className='booking-duration'>
                <i className="fas fa-calendar-alt"></i> {booking.duration}
                </h5>
            </div>
            <div className='booking-desc'>
                <p>{booking.desc}</p>
            </div>
                </div>
                </div>
                <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    <h4><i className="fas fa-thumbs-up"></i></h4>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>Booking Successfull. Don't forget your date!!!</Modal.Body>
            </Modal>
            <Subscribe></Subscribe>
            </div>
    );
};

export default Booking;