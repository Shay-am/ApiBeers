import axios from 'axios';
import { URL_To_Connect_With_Server } from '../Constants/constants';

export const signUp = (nameUser, emailUser, passwordUser) => {
  const data = {
    name: nameUser,
    email: emailUser,
    password: passwordUser
  };

  return axios.post(`${URL_To_Connect_With_Server}/register`, data);
};
