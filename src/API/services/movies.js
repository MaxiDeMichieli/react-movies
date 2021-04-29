import http from '../http';

const moviesService = {
  getAll: () => http.get('api/movies'),
  create: (data) => http.post('api/movies/create', data),
  remove: (id) => http.delete(`api/movies/delete/${id}`),
};

export default moviesService;
