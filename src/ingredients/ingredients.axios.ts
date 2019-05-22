import axios from 'axios';
import { config } from '../../api-config';

export const IngredientsAxios = axios.create({
  // url: `${config.API_BASE_URL}/ingredients.json`,
  baseURL: `${config.API_BASE_URL}/ingredients.json`,
});
