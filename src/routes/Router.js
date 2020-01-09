import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
// import { Container } from './styles';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // const signed = false;
  // if (!signed && isPrivate) {
  //   return <Redirect to="/" />;
  // }
  // if (signed && !isPrivate) {
  //   return <Redirect to="/student" />;
  // }

  return <Route {...rest} component={Component} />;
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
};