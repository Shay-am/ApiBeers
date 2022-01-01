import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

const mainAxios = axios.create({
  baseURL: 'http://localhost:3000/summary'
});

const profileAxios = axios.create({
  baseURL: 'http://localhost:6000/profile'
});

export default setAuthToken;
export { mainAxios, profileAxios };
