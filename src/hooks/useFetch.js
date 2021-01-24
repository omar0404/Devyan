import {useState} from 'react';

const useFetch = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSuccess = (res) => {
    setData(res);
  };
  const handleFailure = (err) => {
    setError(err);
  };
  const handleCompletion = () => {
    setIsLoading(false);
  };

  const fetch = (apiCall) => {
    setIsLoading(true);
    apiCall()
      .then(handleSuccess)
      .catch(handleFailure)
      .finally(handleCompletion);
  };

  return [fetch, data, isLoading, error];
};

export default useFetch;
