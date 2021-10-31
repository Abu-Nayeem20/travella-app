import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const SignUp = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleSignInUsingGoogle = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    // console.log(user);
    return (
        <div className='container'>
            <h2>SIgn up here</h2>
            <div className='row'>
                <div className='col-md-6'>
                <div>
                <Form>
                <Form.Control type="text" placeholder=" Name" />
                <Form.Control type="email" placeholder=" Email" />
                <Form.Control type="password" placeholder=" Password" />
                <Form.Control type="text" placeholder=" Profile Photo URL" />
                <Button variant="primary" type="submit"> Submit </Button>
                </Form>
             </div>
             </div>
            <div className='col-md-6'>
            <div>
             <img src="https://i.ibb.co/MBYv8Vt/signup-page.jpg" alt="" />
             </div>
             </div>
         </div>







            <button onClick={handleSignInUsingGoogle}>Google Sign In</button>
            <h2>Already have an Account?<Link to='login'>
             Login</Link></h2>
            
        </div>
    );
};

export default SignUp;