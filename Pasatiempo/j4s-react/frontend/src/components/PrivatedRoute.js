import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie'
const cookies = new Cookies();
const PrivateRoute = ({ component : Component,...rest }) => (

    <Route
        {...rest}
        render={props => cookies.get('isLogged')? (
            <Component {...props} />)
            : (<Redirect to="/Jobs4Students/signin" />)
        }
    />
);

export default PrivateRoute;
