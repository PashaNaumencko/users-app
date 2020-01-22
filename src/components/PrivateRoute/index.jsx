import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthorized, location, ...props }) => (
  isAuthorized
    ? <Route {...props} render={(props) => <Component {...props} />} />
    : <Redirect to={{ pathname: '/login', state: { from: location } }} />
);

PrivateRoute.propTypes = {
  location: PropTypes.string,
  component: PropTypes.object,
  isAuthorized: PropTypes.bool
};

const mapStateToProps = ({ authData: { isAuthorized } }) => ({
  isAuthorized
});

export default connect(mapStateToProps)(PrivateRoute);
