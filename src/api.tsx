import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yts-proxy.now.sh/',
});

export const getMovieList = () => api.get('/list_movies.json?sort_by=rating');
