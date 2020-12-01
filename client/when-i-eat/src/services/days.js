import api from './apiConfig';

export const getAllDays = async () => {
  const resp = await api.get('/days');
  return resp.data;
}

export const getOneDay = async (id) => {
  const resp = await api.get(`/days/${id}`);
  return resp.data;
}

export const postDay = async (dayData) => {
  const resp = await api.post('/days', { day: dayData });
  return resp.data;
}

export const putDay = async (id, dayData) => {
  const resp = await api.put(`/days/${id}`, { day: dayData });
  return resp.data;
}

export const destroyDay = async (id) => {
  const resp = await api.delete(`/days/${id}`);
  return resp;
}