import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const { user, isLoading } = useAuth();

    if(isLoading){
        return <div className='text-center'><Spinner animation="grow" variant="danger" /></div>
    }
    
    return (
        <Route
            {...rest}
            render = {({location}) => user.email ?
            children : 
            <Redirect
                to={{
                    pathname: '/signup',
                    state: { from: location }
                }}
            ></Redirect>
        }
    > 
        </Route>
    );
};

export default PrivateRoute;