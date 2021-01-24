import axios from 'axios';
import Config from 'react-native-config';
const {API_KEY, API_BASE_URL} = Config;
const getMovies = (page) => {
  const params = {
    api_key: API_KEY,
    page,
  };
  return axios.get(`${API_BASE_URL}discover/movie`, {params});
};

const searchMovies = (query) => {
  const params = {
    api_key: API_KEY,
    query,
  };
  return axios.get(`${API_BASE_URL}search/movie`, {params});
};

export {getMovies, searchMovies};
