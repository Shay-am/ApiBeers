import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../Context/authProvider';

export const PrivateRoutes = ({ children }) => {
  const { activeTokenUser } = useAuthContext();

  return activeTokenUser ? children : <Navigate to={'/login'} />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.object
};
