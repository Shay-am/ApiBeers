import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://api.punkapi.com/v2/beers';

export const useGetBeersApi = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getBeers = async () => {
    setLoading(true);
    try {
      const data = await axios.get(API_URL);
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
