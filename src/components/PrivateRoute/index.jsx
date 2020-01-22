import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthorized, location, ...props }) => (
  isAuthorized
    ? <Route {...props} render={(props) => <Component {...props} />} />
    : <Redirect to={{ pathname: '/login', state: { from: location } }} />
);

const mapStateToProps = ({ authData: { isAuthorized } }) => ({
  isAuthorized
});

export default connect(mapStateToProps)(PrivateRoute);
