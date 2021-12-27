// import React, { useContext } from 'react';
import axios from 'axios';
// import { useState } from 'react';

import { URL_To_Connect_With_Server } from '../Constants/constants';
import { useAuthContext } from '../Context/authProvider';
// import { useContext } from 'react';

export const addBeertest = async (data) => {
  //   const [token, setToken] = useState('');
  const { getActiveToken } = useAuthContext();

  console.log(getActiveToken());

  try {
    const response = await axios.post(`${URL_To_Connect_With_Server}/addBeer`, data, {
      headers: {
        ['authorization']: `Bearer ${getActiveToken()}`
      }
    });
    return response;
  } catch (error) {
    console.log(error.response);
  }
};
