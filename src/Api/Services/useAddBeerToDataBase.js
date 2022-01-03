import { useState } from 'react';
import { useAxios } from 'Api/axios';

export const useAddBeerToDataBase = () => {
  const { instance } = useAxios();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const addBeer = async (data, callback) => {
    try {
      setLoading(true);
      const response = await instance.post('/addBeer', data);
      if (response.status === 200) {
        setMessage('Beer is added to favorite');
        callback();
      }
    } catch (error) {
      setMessage('Try again !!');

      setError(true);
    }
    setLoading(false);
  };

  return { addBeer, loading, error, message };
};
