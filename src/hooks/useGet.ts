import { useState } from 'react';
import api from '../services/api';

export function useGet() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<any>(null);

  const get = async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await api.get(url);
      setResponse(result.data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message || 'Ocorreu um erro ao enviar a solicitação.');
      setLoading(false);
    }
  };

  return {
    get,
    loading,
    error,
    response,
  };
}
