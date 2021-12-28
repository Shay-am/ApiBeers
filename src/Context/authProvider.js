import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import { URL_To_Connect_With_Server } from '../Constants/constants';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [activeTokenUser, setActiveUser] = useState();

  const addBeer = async (data, callback) => {
    try {
      const response = await axios.post(`${URL_To_Connect_With_Server}/addBeer`, data, {
        headers: {
          ['authorization']: `Bearer ${activeTokenUser}`
        }
      });
      if (response) {
        callback();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const setUserToken = (token) => setActiveUser(token);
  const logut = () => setActiveUser(null);

  useEffect(() => {}, [activeTokenUser]);

  const store = {
    activeTokenUser,
    logut,

    addBeer,
    setUserToken
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
