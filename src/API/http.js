import axios from 'axios';

const http = axios.create({ baseURL: 'https://movies-apirest.herokuapp.com/' });

http.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('_Token');
  config.headers = { token };
  return config;
});

export default http;
