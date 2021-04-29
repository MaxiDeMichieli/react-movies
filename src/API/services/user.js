import http from '../http';

const usersService = {
  register: (data) => http.post('register', data),
  login: (data) => http.post('login', data),
};

export default usersService;
