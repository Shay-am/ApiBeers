import axios from 'axios';
import { URL_To_Connect_With_Server } from '../Constants/constants';

export const sendEmail = (info, email) => {
  const data = {
    data: info,
    email: email
  };
  return axios.post(`${URL_To_Connect_With_Server}/sendEmail`, data);
};
