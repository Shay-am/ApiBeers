import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL_To_Connect_With_Server } from 'Constants/constants';

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
    setError(false);
    setMessage('');

    try {
      setLoading(true);
      const newUser = await axios.post(`${URL_To_Connect_With_Server}/register`, data);
      if (newUser) {
        navigate('/');
      }
    } catch (error) {
      setError(true);
      setMessage(error.response.data.err);
    }

    setLoading(false);
  };

  return { signUp, setMessage, loading, error, message };
};
