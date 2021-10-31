import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Modal } from 'react-bootstrap';
import Subscribe from '../Shared/Subscribe/Subscribe';
import './AddPackage.css';

const AddPackage = () => {
    const locationRef = useRef();
    const durationRef = useRef();
    const priceRef = useRef();
    const thumbnailRef = useRef();
    const descRef = useRef();

    const [smShow, setSmShow] = useState(false);

    const handleAddPackage = e => {
           const location = locationRef.current.value; 
           const duration = durationRef.current.value; 
           const price = priceRef.current.value; 
           const thumbnail = thumbnailRef.current.value; 
           const desc = descRef.current.value; 

           const newPackage = {location, duration, price, thumbnail, desc};
           
           fetch('https://blooming-castle-55027.herokuapp.com/packages', {
               method: 'POST',
               headers: {
                   'content-type' : 'application/json'
               },
               body: JSON.stringify(newPackage)
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
            <div className='booking-page-top'>
            <h2>Add Package</h2>
            <p>Here Admin Can Add New Tour Package.</p>
            </div>
            <div className='container'>
                <div className='add-tour-info-title'>
                <h2><i className="fas fa-info"></i> Add Tour Information</h2>
                </div>
                <div className='row'>
                <div className='col-md-8 offset-md-2'>
                <form onSubmit={handleAddPackage} className='tour-adding-form'>
                <input className='w-100 mb-3' type="text" ref={locationRef} placeholder='Location' required />
                <br />
                <input className='w-100 mb-3' type="text" ref={durationRef} placeholder='Duration' required />
                <br />
                <input className='w-100 mb-3' type="text" ref={priceRef} placeholder='Price' required />
                <br />
                <input className='w-100 mb-3' type="text" ref={thumbnailRef} placeholder='Thumbnail Image' required />
                <br />
                <textarea className='w-100 mb-3' cols="30" rows="10" ref={descRef} placeholder='Description' required></textarea>
                <input className='package-add-btn' type="submit" value="ADD PACKAGE" />
            </form>
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
                <Modal.Body>A New Package Added Successfully.</Modal.Body>
            </Modal>
        </div>
        <Subscribe></Subscribe>
        </div>
    );
};

export default AddPackage;