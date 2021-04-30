import http from '../http';

const moviesService = {
  getAll: () => http.get('api/movies'),
  create: (data) => http.post('api/movies/create', data),
  remove: (id) => http.delete(`api/movies/delete/${id}`),
  getOne: (id) => http.get(`api/movies/${id}`),
  update: (id, data) => http.put(`api/movies/update/${id}`, data),
};

export default moviesService;
