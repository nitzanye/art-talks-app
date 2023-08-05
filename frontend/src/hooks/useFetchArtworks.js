import { useState, useEffect } from 'react';
import API from '../utils/api';

export const useFetchArtworks = (searchTerm = '') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    API.get(`/artworks/${searchTerm}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchTerm]);

  return { data, loading, error };
};
