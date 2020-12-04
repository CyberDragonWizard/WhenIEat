import api from './apiConfig';

export const getAllDays = async () => {
  const resp = await api.get('/days');
  return resp.data;
}

export const addFlavor = async (dayId, mealId) => {
  const resp = await api.put(`/days/${dayId}/meals/${mealId}`);
  return resp.data;
}