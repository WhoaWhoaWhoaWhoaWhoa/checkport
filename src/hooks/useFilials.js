import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export const useFilials = () => {
  const [filials, setFilials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFilials = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await apiService.getFilials();
        setFilials(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilials();
  }, []);

  return { filials, loading, error };
};