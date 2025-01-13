import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const apis = {
  get: (endpoint: string) => instance.get(endpoint),
  post: (endpoint: string, data: Record<string, any>) =>
    instance.post(endpoint, data),
  show: (endpoint: string, id: string) => instance.get(`${endpoint}/${id}`),
  update: (endpoint: string, id: string, data: Record<string, any>) =>
    instance.put(`${endpoint}/${id}`, data),
  delete: (endpoint: string, id: string) =>
    instance.delete(`${endpoint}/${id}`),
};

export default apis;
