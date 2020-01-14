import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
// import { Container } from './styles';
import Default from '../pages/_layouts/default';
import Auth from '../pages/_layouts/auth';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/student" />;
  }
  const Layout = signed ? Default : Auth;
  return (
    <Route
      {...rest}
      render={props => (
        <>
          <Layout>
            <Component {...props} />
          </Layout>
        </>
      )}
    />
  );
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
};
