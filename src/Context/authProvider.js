import React, { createContext, useState, useContext, useEffect } from 'react';

import PropTypes from 'prop-types';
import axios from 'axios';

const URL = 'http://localhost:2000';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [activeTokenUser, setActiveUser] = useState();
  const [favoriteBeers, setFavoriteBeers] = useState([]);

  const addFavoritBeers = (data) => {
    setFavoriteBeers((prevState) => [...prevState, { ...data }]);
  };

  const addToDataBase = async (data) => {
    try {
      const response = await axios.post(`${URL}/addProduct`, data, {
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

  const getBeersFromDataBase = async () => {
    try {
      const data = await axios.get(`${URL}/getBeers`, {
        headers: {
          ['authorization']: `Bearer ${activeTokenUser}`
        }
      });

      return data?.data.data;
    } catch (error) {
      console.log(error);
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
      const newUser = await axios.post('http://localhost:2000/register', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (newUser) {
        console.log(newUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const LogIn = async (e, nameUser, passwordUser) => {
    e.preventDefault();
    const data = {
      name: nameUser,
      password: passwordUser
    };

    const user = await axios.post('http://localhost:2000/login', data);
    if (user) {
      setActiveUser(user.data.token);
    }
  };

  useEffect(() => {}, [favoriteBeers]);

  const store = {
    activeTokenUser,
    signUp,
    LogIn,
    favoriteBeers,
    addFavoritBeers,
    addToDataBase,
    getBeersFromDataBase
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
