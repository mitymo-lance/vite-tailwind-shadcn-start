import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getScores = async () => {
  const response = await api.get('/scores');
  return response.data;
};

export const updateScore = async (score: any) => {
  const response = await api.put(`/scores/${score.id}`, score);
  return response.data;
};

export default api; 