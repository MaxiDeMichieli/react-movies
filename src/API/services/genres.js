import http from '../http';

const genresService = {
  getAll: () => http.get('api/genres'),
};

export default genresService;
