import api from './apiConfig';

export const getAllMeals = async () => {
  const resp = await api.get('/meals');
  return resp.data;
}

export const getOneMeal = async (id) => {
  const resp = await api.get(`/meals/${id}`);
  return resp.data;
}

export const postMeal = async (mealData) => {
  const resp = await api.post('/meals', { meal: mealData });
  return resp.data;
}

export const putMeal = async (id, mealData) => {
  const resp = await api.put(`/meals/${id}`, { meal: mealData });
  return resp.data;
}

export const destroyMeal = async (id) => {
  const resp = await api.delete(`/meals/${id}`);
  return resp;
}