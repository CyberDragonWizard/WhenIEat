import api from './apiConfig';

export const getAllMeals = async () => {
  const resp = await api.get('/meals');
  return resp.data;
}

export const addMeal = async (mealId, dayId) => {
  const resp = await api.put(`/meals/${mealId}/days/${dayId}`);
  return resp.data;
}