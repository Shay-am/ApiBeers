import axios from 'axios';
import { URL_To_Connect_With_Server } from 'Constants/constants';
import { useAuthContext } from 'Context/authProvider';

export const useAxios = (url) => {
  const { activeTokenUser } = useAuthContext();

  const instance = axios.create();
  instance.interceptors.request.use(
    function (config) {
      config.headers.Authorization = `Bearer ${activeTokenUser}`;
      config.baseURL = url ? url : URL_To_Connect_With_Server;

      return config;
    },
    function (error) {
      console.log(error);
      return Promise.reject(error);
    }
  );

  return { instance };
};
