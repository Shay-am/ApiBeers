import { useState } from 'react';
import { useAxios } from 'Api/axios';
import { getNameBeersAndIndexToSend } from 'Utils/beersPushToArray';
import { validateEmail } from 'Utils/validateEmailRules';

export const useSendEmail = (beers) => {
  const [email, setEmail] = useState();
  const { instance } = useAxios();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setMessage('');
    setErrors(validateEmail(email));
    setEmail(e.target.value);
  };

  const sendEmail = async (info) => {
    const data = {
      data: info,
      email: email
    };
    setMessage('');
    try {
      setLoading(true);
      const response = await instance.post('/sendEmail', data);
      if (response) {
        setEmailError(false);
        setMessage(response.data.message);
      }
    } catch (error) {
      setEmailError(true);

      setMessage('Email is not sent');
    }
    setLoading(false);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    const beerToSend = getNameBeersAndIndexToSend(beers);

    if (beerToSend && Object.keys(errors).length === 0) {
      console.log('click');
      sendEmail(beerToSend, email);
    }
  };

  return { handleSubmitEmail, message, loading, emailError, handleChange, errors };
};
