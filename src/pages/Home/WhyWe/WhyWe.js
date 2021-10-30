import React from 'react';
import './WhyWe.css';

const WhyWe = () => {
    return (
        <div className='whywe-section'>
            <div className='container'>
            <div className='section-heading'>
                <h5>Why Travella</h5>
                <h2>Why You Are Travel <br /> With Travella</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                <div className="card h-100 whywe-item">
                <i className="fas fa-users"></i>
                <div className="card-body">
                <h3 className="card-title">1000+ Our worldwide guide</h3>
                </div>
                </div>
            </div>
                <div className="col">
                <div className="card h-100 whywe-item">
                <i className="fas fa-handshake"></i>
                <div className="card-body">
                <h3 className="card-title">100% trusted travel agency</h3>
                </div>
                </div>
            </div>
                <div className="col">
                <div className="card h-100 whywe-item">
                <i className="fas fa-user-secret"></i>
                <div className="card-body">
                <h3 className="card-title">10+ year of travel experience</h3>
                </div>
                </div>
            </div>
           </div>
            </div>
        </div>
    );
};

export default WhyWe;