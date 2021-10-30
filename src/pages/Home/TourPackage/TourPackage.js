import React from 'react';
import { Link } from 'react-router-dom';
import './TourPackage.css';

const TourPackage = (props) => {
    const {location, thumbnail, desc, duration, price} = props.package;
    const shortDesc = desc.slice(0, 130);
    return (
          <div className="col">
            <div className="card h-100 tour-package">
            <div className='overflow-hidden'>
            <img src={thumbnail} className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
            <h3 className="card-title tour-location"><i className="fas fa-map-marker-alt"></i> {location}</h3>
            <div className='d-flex justify-content-between price-and-time'>
                <h5>{price}</h5>
                <h5>
                <i className="fas fa-calendar-alt"></i> {duration}
                </h5>
            </div>
            <p className="card-text">{shortDesc}...</p>
            <Link to='/booking'>
            <button className='book-button'>Book Now</button>
            </Link>
        </div>
    </div>
  </div>
 );
};

export default TourPackage;