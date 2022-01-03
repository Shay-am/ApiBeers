import { useEffect, useState } from 'react';

import { API_BEERS_URL } from 'Constants/constants';
import { useAxios } from 'Api/axios';

export const useGetBeersApi = () => {
  const { instance } = useAxios(API_BEERS_URL);
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getBeers = async () => {
    setLoading(true);
    try {
      const data = await instance.get('beers');
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
