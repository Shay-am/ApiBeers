import { useState } from 'react';
import axios from 'axios';
import { URL_To_Connect_With_Server } from 'Constants/constants';

export const useSendEmail = (beers, email) => {
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
      const response = await axios.post(`${URL_To_Connect_With_Server}/sendEmail`, data);
      if (response) {
        setEmailError(false);
        setMessage(response.data.message);
      }
    } catch (error) {
      setEmailError(true);
      setMessage(error.response.data.message);
    }
    setLoadingSendEmail(false);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    const beerToSend = [];

    beers.map((beer, index) => {
      beerToSend.push({ number: index + 1, name: beer.name });
    });

    if (beerToSend) {
      sendEmail(beerToSend, email);
    }
  };

  return { handleSubmitEmail, message, loadingSendEmail, emailError };
};
