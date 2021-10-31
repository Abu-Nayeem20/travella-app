import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound-area'>
            <Link to='/home'>
                <button className='not-found-btn'>Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;