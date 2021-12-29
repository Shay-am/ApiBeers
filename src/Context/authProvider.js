import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [activeTokenUser, setActiveTokenUser] = useState();

  const logut = () => setActiveTokenUser(null);

  useEffect(() => {}, [activeTokenUser]);

  const store = {
    activeTokenUser,
    logut,
    setActiveTokenUser
  };

  return (
    <>
      <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
    </>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.array
};
