import axios from 'axios';
import Config from 'react-native-config'
const { API_KEY, API_BASE_URL } = Config
const getMovies = (page) => {
  const params = {
    api_key: API_KEY,
    page,
  };
  return axios.get(API_BASE_URL, { params });
};

export { getMovies };
