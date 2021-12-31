import { useState } from 'react';
import axios from 'axios';
import { URL_To_Connect_With_Server } from '../Constants/constants';
import { useAuthContext } from '../Context/authProvider';

export const useAddBeerToDataBase = () => {
  const { activeTokenUser } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addBeer = async (data, callback) => {
    try {
      setLoading(true);
      const response = await axios.post(`${URL_To_Connect_With_Server}/addBeer`, data, {
        headers: {
          ['authorization']: `Bearer ${activeTokenUser}`
        }
      });
      if (response) {
        callback();
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return { addBeer, loading, error };
};
