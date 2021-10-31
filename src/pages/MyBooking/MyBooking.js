import React from 'react';
import { Card, Col, Table } from 'react-bootstrap';

const MyBooking = (props) => {
    // console.log(props)
    const {_id, name, email, phone, date, duration, person, location, price, status, ticket, comment} = props.booking;
    
    return (
             <Col>
             <Card className='bg-dark overflow-hidden'>
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
             <button onClick={() => props.handleCancelBooking(_id)} className='btn btn-danger my-3'>Cancel Booking</button>
             </div>
              </Card.Body>
           </Card>
            </Col>
    );
};

export default MyBooking;