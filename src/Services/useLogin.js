import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_To_Connect_With_Server } from '../Constants/constants';
import { useAuthContext } from '../Context/authProvider';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();
  const { setUserToken } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const signIn = async (e, nameUser, passwordUser) => {
    e.preventDefault();
    const data = {
      name: nameUser,
      password: passwordUser
    };

    try {
      setError('');
      setLoading(true);
      const user = await axios.post(`${URL_To_Connect_With_Server}/login`, data);
      if (user) {
        setUserToken(user.data.token);
        navigate('/');
      }
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };
  useEffect(() => {
    return () => {
      setLoading('');
      setError('');
    };
  }, []);

  return { signIn, loading, error };
};
