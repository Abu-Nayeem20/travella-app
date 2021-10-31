import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './SignUp.css';


const SignUp = () => {
    const {signInUsingGoogle, error, createAccountWithGoogle, updateUserInfo, setIsLoading, setUser, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');

    const handleNameChange = e =>{
        setName(e.target.value);
    }
    
    const handleEmailChange = e =>{
          setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }  
    const handlePhotoChange = e =>{
        setPhoto(e.target.value);
    }

    const handleSubmitButton = e =>{
        e.preventDefault();
        // console.log(email, password);
        if(password.length < 6){
          setError('Password must be at least 6 characters');
          return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
          setError('Password must contain two uppercase letters');
          return;
        }
        if(!/(?=.*[!@#$&*])/.test(password)){
          setError('Password must contain one special character');
          return;
        }
        if(!/(?=.*[0-9].*[0-9])/.test(password)){
          setError('Password must contain two digit');
          return;
        }
        handleCreateAccoutWithGoogle();
    }
    
    const handleCreateAccoutWithGoogle = () => {
        createAccountWithGoogle(email,password)
    .then((res) => {
      setIsLoading(true)
      updateUserInfo(name, photo);
      setUser(res.user)
        setError('');
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=> {
        setIsLoading(false)
      })
    }




    const handleSignInUsingGoogle = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    // console.log(user);
    return (
        <div className='container'>
            <div className='signup-page-header'>
            <h2>Sign Up With Travella</h2>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                <div className='signup-page-img'>
             <img src="https://i.ibb.co/MBYv8Vt/signup-page.jpg" alt="" />
             </div>
             </div>
            <div className='col-md-6'>
            <div>
            <p className='text-danger'>{error}</p>
                <Form className='signup-form'>
                <Form.Control onBlur={handleNameChange} type="text" placeholder=" Name" required />
                <Form.Control onBlur={handleEmailChange} type="email" placeholder=" Email" required/>
                <Form.Control onBlur={handlePasswordChange} type="password" placeholder=" Password" required/>
                <Form.Control onBlur={handlePhotoChange} type="text" placeholder=" Profile Photo URL" required/>
                <button onClick={handleSubmitButton} className='signup-btn'>Sign Up</button>
                </Form>
                <div>
                    <h2 className='or-text'>Or</h2>

                <div className='google-signin-btn'>
                <button onClick={handleSignInUsingGoogle}><i className="fab fa-google"></i> Login With Google</button>
                </div>
                <div className='already-account'>
                <h2>Already have an Account? <Link to='login'>
             Login</Link></h2>
                </div>
                </div>
             </div>
             </div>
         </div>  
        </div>
    );
};

export default SignUp;