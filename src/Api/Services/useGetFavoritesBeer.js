import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_To_Connect_With_Server } from 'Constants/constants';
import { useAuthContext } from 'Context/authProvider';

export const getBeersFromDataBase = () => {
  const { activeTokenUser } = useAuthContext();
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getBeers = async () => {
    setLoading(true);
    try {
      const data = await axios.get(`${URL_To_Connect_With_Server}/getBeers`, {
        headers: {
          ['authorization']: `Bearer ${activeTokenUser}`
        }
      });
      setBeers(data?.data.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return { beers, loading, error };
};
