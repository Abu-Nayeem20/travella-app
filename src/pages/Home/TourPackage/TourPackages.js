import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TourPackage from './TourPackage';

const TourPackages = () => {
    const [packages, setPackages] = useState([]);

    useEffect( () => {
        fetch('./data.json')
        .then(res => res.json())
        .then( data => {
            setPackages(data);
        })
    }, [])
    return (
        <div id='packages' className='container mb-5'>
            <div className='section-heading'>
            <h5>Choose Your Package</h5>
            <h2>Select Your Best Package <br /> For Your Travel</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                packages.map(packag => <TourPackage package={packag}></TourPackage>)
            }
            </div>
        </div>
    );
};

export default TourPackages;