import {useState, useEffect} from 'react';
import {getMovies} from 'MoviesApp/src/Api/movies';
const useFetchMovies = (page) => {
  const [movies, setMovies] = useState([]);
  const [isFetchingMovies, setIsFetchingMovies] = useState(false);
  const handleFetchMoviesSuccess = (res) => {
    setMovies((prevMovies) => [...prevMovies, ...res.data.results]);
  };
  const handleFetchMoviesFailure = () => {
    // error handler
  };
  const handleFetchMoviesSettled = () => {
    setIsFetchingMovies(false);
  };
  const fetchMovies = () => {
    setIsFetchingMovies(true);
    getMovies(page)
      .then(handleFetchMoviesSuccess)
      .catch(handleFetchMoviesFailure)
      .finally(handleFetchMoviesSettled);
  };
  useEffect(() => {
    fetchMovies();
  }, [page]);

  return [movies, isFetchingMovies];
};

export default useFetchMovies;
