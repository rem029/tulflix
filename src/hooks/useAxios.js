import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (method, url) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const config = { method: method, url: url };

  const fetchData = () => {
    axios(config)
      .then((response) => setResponse(response))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, response, error };
};

export default useAxios;
