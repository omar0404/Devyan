import {useState, useEffect, useRef} from 'react';
import {getMovies, searchMovies} from 'Devyan/src/Api/movies';
import {useFetch} from 'Devyan/src/hooks';
import humps from 'lodash-humps';

const useFetchMovies = (page, query) => {
  const [fetch, response, isLoading, error] = useFetch();
  const [movies, setMovies] = useState([]);
  const oldQuery = useRef();
  useEffect(() => {
    if (!response) {
      return;
    }
    const returnedMovies = humps(response.data.results);
    if (!query) {
      setMovies((prevMovies) => [...prevMovies, ...returnedMovies]);
      return;
    }
    setMovies(returnedMovies);
    return;
  }, [response]);
  const handleGetMovies = (page) => () => {
    return getMovies(page);
  };
  const handleSearchMovies = (query) => () => {
    return searchMovies(query);
  };
  const handleRemoveSearchValue = () => {
    if (oldQuery.current?.length && !query.length) {
      setMovies([]);
    }
  };
  useEffect(() => {
    if (!error) {
      return;
    }
    setMovies([]);
  }, [error]);
  useEffect(() => {
    handleRemoveSearchValue();
    oldQuery.current = query;
    if (!query) {
      fetch(handleGetMovies(page));
      return;
    }
    fetch(handleSearchMovies(query));
    return () => {};
  }, [page, query]);

  return [movies, isLoading];
};

export default useFetchMovies;
