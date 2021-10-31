import React, { useEffect, useState } from 'react';
import { Modal, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Subscribe from '../Shared/Subscribe/Subscribe';
import MyBooking from './MyBooking';
import './MyBookings.css';

const MyBookings = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [smShow, setSmShow] = useState(false);


    const {user} = useAuth();
    const email = user.email;

    useEffect( () => {
        fetch('https://blooming-castle-55027.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => {
            setAllBookings(data);
        })
    }, []);

    const filterMyBooking = allBookings.filter(myBooking => myBooking.email === email );

     const handleCancelBooking = id => {
        const proceed = window.confirm("Booking Cancel!!! Really?")
        if(proceed){
            const url = `https://blooming-castle-55027.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                setSmShow(true);
                const remainingMyBookings = allBookings.filter(booking => booking._id !== id);
                setAllBookings(remainingMyBookings); 
            }
        });
      }
    }


    return (
        <div>
            <div className='booking-page-top'>
            <h2>My Boooooooookings History</h2>
            <p>I have a long journey with Travella and here is my journey history.</p>
            </div>
            <div className='container my-5'>
            <Row xs={1} md={2} className="g-4">
            {
                filterMyBooking.map(mybooking => <MyBooking
                key={mybooking._id}
                handleCancelBooking={handleCancelBooking}
                 booking={mybooking}   
                ></MyBooking>)
            }
            </Row>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    <h4><i className="far fa-sad-cry text-warning fs-3"></i></h4>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>Booking Canceled</Modal.Body>
            </Modal>
        </div>
        <Subscribe></Subscribe>
        </div>
    );
};

export default MyBookings;