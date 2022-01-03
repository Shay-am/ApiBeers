import { useEffect, useState } from 'react';
import { useAxios } from 'Api/axios';

export const useFetchDataServer = ({ url = '', method = 'get', body = {} }) => {
  const { instance } = useAxios();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await instance[method](`/${url}`, body);
      if (response.status === 200) {
        setData(response);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    instance && fetchData();
  }, []);

  return { fetchData, data, loading, error, instance };
};
