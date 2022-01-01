import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BEERS_URL } from 'Constants/constants';

export const useGetBeersApi = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getBeers = async () => {
    setLoading(true);
    try {
      const data = await axios.get(API_BEERS_URL);
      setBeers(data?.data);
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
