import axios from 'axios';

export const searchCity = async (cityNameOrCode) => {
  try {
    const response = await axios.get(`/api/search?comune=${cityNameOrCode}`);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};