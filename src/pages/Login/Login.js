import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle, error, setError, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        // console.log(email, password);

    const handleEmailChange = e =>{
        setEmail(e.target.value);
  }
  const handlePasswordChange = e =>{
      setPassword(e.target.value);
  } 

  const handleLoginWithEmailAndPassword = e =>{
    loginWithEmailAndPassword(email,password)
    .then((res) => {
      setIsLoading(true)
        setUser(res.user);
        setError('');
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false)
      })
      e.preventDefault();
}

    const handleSignInUsingGoogle = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div className='container'>
            <div className='signup-page-header'>
            <h2>Login To Travella</h2>
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
                <Form.Control onBlur={handleEmailChange} type="email" placeholder=" Email" required />
                <Form.Control onBlur={handlePasswordChange} type="password" placeholder=" Password" required/>
                <button onClick={handleLoginWithEmailAndPassword} className='signup-btn'>Login</button>
                </Form>
                <div>
                    <h2 className='or-text'>Or</h2>

                <div className='google-signin-btn'>
                <button onClick={handleSignInUsingGoogle}><i className="fab fa-google"></i> Login With Google</button>
                </div>
                <div className='already-account'>
                <h2>New To Travella? <Link to='signup'>
             Sign Up</Link></h2>
                </div>
                </div>
             </div>
         </div>
             </div>  
        </div>
    );
};

export default Login;