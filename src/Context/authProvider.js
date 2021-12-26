import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

const URL = 'http://localhost:2000';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [activeTokenUser, setActiveUser] = useState();

  const addBeer = async (data) => {
    try {
      const response = await axios.post(`${URL}/addBeer`, data, {
        headers: {
          ['authorization']: `Bearer ${activeTokenUser}`
        }
      });

      if (response.data) {
        console.log(response.status);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const signUp = async (e, nameUser, emailUser, passwordUser) => {
    e.preventDefault();
    const data = {
      name: nameUser,
      email: emailUser,
      password: passwordUser
    };

    try {
      const newUser = await axios.post(`${URL}/register`, data);

      if (newUser) {
        console.log(newUser);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const LogIn = async (e, nameUser, passwordUser) => {
    e.preventDefault();
    const data = {
      name: nameUser,
      password: passwordUser
    };

    const user = await axios.post(`${URL}/login`, data);
    if (user) {
      setActiveUser(user.data.token);
    }
  };

  useEffect(() => {}, []);

  const store = {
    activeTokenUser,
    signUp,
    LogIn,
    addBeer
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
