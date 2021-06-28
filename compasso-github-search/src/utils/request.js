import axios from 'axios'
import { BASE_URL, client_id, client_secret } from "./constants";

export const requestData = async (request) => {
  try {
    const response = await axios.get(
      BASE_URL + request + `?client_id=${client_id}&client_secret=${client_secret}`
    )
    return response.data
  } catch (err) {
    console.log('Erro:', err)
    return null;
  }
};