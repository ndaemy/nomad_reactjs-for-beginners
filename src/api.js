import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

api.get('/tv/popular', {
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'en-US'
  }
});

export default api;
