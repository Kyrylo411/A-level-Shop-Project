import React from 'react';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return (
                    isAuthenticated ? (
                        <Component {...props} {...rest} />
                    ) : (
                        <Redirect to="/" />
                    )
                )
            }}
        />
    )
}
export default PrivateRoute
