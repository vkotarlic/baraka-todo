import { useState, useEffect } from 'react';
import axios from 'axios';

interface HookProps {
  url: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  body?: string;
  headers?: string;
}

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useAxios = ({ url, method, body, headers }: HookProps) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios[method](url, headers && JSON.parse(headers), body && JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxios;
