import axios from 'axios';

const token = window.localStorage.getItem('_Token');

const http = axios.create({ baseURL: 'https://movies-apirest.herokuapp.com/' });

http.interceptors.request.use((config) => {
  config.headers = { token };
  return config;
});

export default http;
