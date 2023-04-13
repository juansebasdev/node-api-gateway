import { BASE_URL_USERS } from '../config/globals';
import apiAdapter from '../utils/api.adapter';

const api = apiAdapter(BASE_URL_USERS);

const checkCinema = async (id: number): Promise<Boolean> => {
  let cinema = null;
  try {
    cinema = await api.get(`/user/${id}/`);
  } catch (error) {
    return false;
  }
  return cinema ? true : false;
};

export { checkCinema };
