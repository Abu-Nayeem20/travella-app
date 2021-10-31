import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './Subscribe.css'

const Subscribe = () => {
    const {user} = useAuth();
    return (
        <div className='subscribe-area'>
            <div className='container'>
             <div className='row'>
                <div className='col-md-8 offset-md-2'>
                <h2 className='hey-user'>Hey, {user.displayName}</h2>
                <h2 className='subs-text'>Subscribe To Our Newsletter <br /> For Latest Update</h2>
                <InputGroup className="my-5">
                    <FormControl
                    className='py-3'
                    placeholder="Your E-mail" />
                    <Button variant="primary">
                    Subscribe
                    </Button>
                </InputGroup>
                </div>
             </div>
            </div>
        </div>
    );
};

export default Subscribe;