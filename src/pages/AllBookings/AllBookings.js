import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal, Row } from 'react-bootstrap';
import Subscribe from '../Shared/Subscribe/Subscribe';
import AllBooking from './AllBooking';

const AllBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [smShow, setSmShow] = useState(false);

    useEffect( () => {
        fetch('https://blooming-castle-55027.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => {
            setBookings(data);
        })
    }, []);

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
                const remainingMyBookings = bookings.filter(booking => booking._id !== id);
                setBookings(remainingMyBookings); 
            }
        });
      }
    }

    return (
        <div>
            <div className='container'>
            <h2 className='text-center'>All bookings will display here</h2>
            <Row xs={1} md={2} className="g-4">
            {
                bookings.map(booking => <AllBooking
                key={booking._id}
                handleCancelBooking={handleCancelBooking}
                booking={booking}
                ></AllBooking>)
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

export default AllBookings;