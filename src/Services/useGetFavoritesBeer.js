import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../Context/authProvider';
const URL = 'http://localhost:2000';

export const getBeersFromDataBase = () => {
  const { activeTokenUser } = useAuthContext();
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getBeers = async () => {
    setLoading(true);
    try {
      const data = await axios.get(`${URL}/getBeers`, {
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
