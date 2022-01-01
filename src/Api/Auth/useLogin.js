import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL_To_Connect_With_Server } from 'Constants/constants';
import { useAuthContext } from 'Context/authProvider';

export const useLogin = () => {
  const navigate = useNavigate();
  const [contentInputs, setContentInput] = useState({});
  const { setActiveTokenUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setContentInput({ ...contentInputs, [e.target.name]: e.target.value });
  };

  const signIn = async (e) => {
    e.preventDefault();
    const data = {
      name: contentInputs.login,
      password: contentInputs.password
    };

    try {
      setError('');
      setLoading(true);
      const user = await axios.post(`${URL_To_Connect_With_Server}/login`, data);
      if (user) {
        setActiveTokenUser(user.data.token);
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

  return { signIn, handleChange, loading, error };
};
