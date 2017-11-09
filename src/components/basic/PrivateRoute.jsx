import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'


const PrivateRoute = ({
    component: Component, 
    authenticator, 
    redirect, 
    ...rest
}) => (
    <Route {...rest} render={ props => 
            authenticator.authenticated ? (
                <Component {...props}/>
            ) : (
                <Redirect to={redirect}/>
            )
        }
    />
)

export default PrivateRoute