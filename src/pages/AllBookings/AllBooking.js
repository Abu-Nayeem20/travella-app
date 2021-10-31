import React, { useState } from 'react';
import { Card, Table, Col, Modal } from 'react-bootstrap';

const AllBooking = (props) => {
    const {_id, name, email, phone, date, duration, person, location, price, status, ticket, comment} = props.booking;

    const [smShow, setSmShow] = useState(false);

    const updateStatus = {status: "Approved"};

    const handleStatusUpdate = id => {
        const url = `https://blooming-castle-55027.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                setSmShow(true);
            }
        })
    }

    return (
        <Col>
             <Card className='bg-dark overflow-scroll'>
                 <Card.Body>
                 <Card.Title className='text-light text-center fs-3 fw-bold py-3'>{location}</Card.Title>
                 <div>
                 <Table striped bordered hover variant="dark">
                 <tbody>
                    <tr>
                     <td><h6>Name</h6></td>
                     <td><h6>{name}</h6></td>
                     </tr>
                     <tr>
                     <td><h6>Email</h6></td>
                    <td><h6>{email}</h6></td>
                    </tr>
                     <tr>
                    <td><h6>Phone</h6></td>
                    <td><h6>{phone}</h6></td>
                    </tr>
                <tr>
                  <td><h6>Tour Date</h6></td>
                  <td><h6>{date}</h6></td>
                </tr>
                  <tr>
                    <td><h6>Duration</h6></td>
                    <td><h6>{duration}</h6></td>
                   </tr>
                   <tr>
                 <td><h6>Price</h6></td>
                <td><h6>{price}</h6></td>
                    </tr>
                    <tr>
                  <td><h6>Person</h6></td>
                   <td><h6>{person}</h6></td>
                 </tr>
                  <tr>
                  <td><h6>Ticket</h6></td>
                   <td><h6>{ticket}</h6></td>
                   </tr>
                   <tr>
                    <td><h6>Comment</h6></td>
                  <td><p>{comment}</p></td>
                  </tr>
                   <tr>
                  <td><h6>Status</h6></td>
                   <td><p className='text-warning'>{status}</p></td>
                   </tr>
               </tbody>
               </Table>
             <button onClick={ () => props.handleCancelBooking(_id)} className='btn btn-danger my-3'>Cancel Booking</button>
             <button onClick={ () => handleStatusUpdate(_id)} className='btn btn-warning ms-5'>Approve</button>
             </div>
              </Card.Body>
           </Card>
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
                <Modal.Body>Approved Successfully</Modal.Body>
            </Modal>
            </Col>
    );
};

export default AllBooking;