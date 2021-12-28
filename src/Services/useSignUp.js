import { useState } from 'react';
import axios from 'axios';
import { URL_To_Connect_With_Server } from '../Constants/constants';
import { useNavigate } from 'react-router-dom';

export const useSignUp = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const signUp = async (e, nameUser, emailUser, passwordUser) => {
    e.preventDefault();
    const data = {
      name: nameUser,
      email: emailUser,
      password: passwordUser
    };
    setError('');
    setMessage('');

    try {
      setLoading(true);
      const newUser = await axios.post(`${URL_To_Connect_With_Server}/register`, data);
      if (newUser) {
        setMessage(newUser.data.message);
        navigate('/');
      }
    } catch (error) {
      setError(error.response.data.err);
    }

    setLoading(false);
  };

  return { signUp, loading, error, message };
};
