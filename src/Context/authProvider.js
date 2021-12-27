import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL_To_Connect_With_Server } from '../Constants/constants';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [activeTokenUser, setActiveUser] = useState();

  const addBeer = async (data) => {
    try {
      const response = await axios.post(`${URL_To_Connect_With_Server}/addBeer`, data, {
        headers: {
          ['authorization']: `Bearer ${activeTokenUser}`
        }
      });
      return response;
    } catch (error) {
      console.log(error.response);
    }
  };

  const logut = () => setActiveUser(null);

  const LogIn = async (e, nameUser, passwordUser) => {
    e.preventDefault();
    const data = {
      name: nameUser,
      password: passwordUser
    };

    const user = await axios.post(`${URL_To_Connect_With_Server}/login`, data);
    if (user) {
      setActiveUser(user.data.token);
      navigate('/');
    }
  };

  useEffect(() => {}, [activeTokenUser]);

  const store = {
    activeTokenUser,
    logut,
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
