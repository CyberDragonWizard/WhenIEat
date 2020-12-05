import api from './apiConfig';

export const getAllDays = async () => {
  const resp = await api.get('/days');
  return resp.data;
}

export const addDay = async (dayId, mealId) => {
  const resp = await api.put(`/days/${dayId}/meals/${mealId}`);
  return resp.data;
}

export const postDay = async (dayData) => {
  const resp = await api.post('/days', { day: dayData });
  return resp.data;
}