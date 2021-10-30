import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const SignUp = () => {
    const {user, signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleSignInUsingGoogle = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    console.log(user);
    return (
        <div>
            <h2>SIgn up here</h2>
            <button onClick={handleSignInUsingGoogle}>Google Sign In</button>
        </div>
    );
};

export default SignUp;