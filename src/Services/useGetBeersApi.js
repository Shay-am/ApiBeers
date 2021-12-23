import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://api.punkapi.com/v2/beers';

export const useGetBeersApi = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(API_URL);
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading
  };
};
