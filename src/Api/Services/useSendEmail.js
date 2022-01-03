import { useState } from 'react';
import { useAxios } from 'Api/axios';
import { getNameBeersAndIndexToSend } from 'Utils/beersPushToArray';

export const useSendEmail = (beers, email) => {
  const { post } = useAxios();
  const [message, setMessage] = useState('');
  const [loadingSendEmail, setLoadingSendEmail] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const sendEmail = async (info, email) => {
    const data = {
      data: info,
      email: email
    };
    setMessage('');
    try {
      setLoadingSendEmail(true);
      const response = await post('/sendEmai', data);
      if (response) {
        setEmailError(false);
        setMessage(response.data.message);
      }
    } catch (error) {
      setEmailError(true);
      setMessage('Email is not sent');
    }
    setLoadingSendEmail(false);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    const beerToSend = getNameBeersAndIndexToSend(beers);

    if (beerToSend) {
      sendEmail(beerToSend, email);
    }
  };

  return { handleSubmitEmail, message, loadingSendEmail, emailError };
};
