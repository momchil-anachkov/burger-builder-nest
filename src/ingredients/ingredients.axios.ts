import axios from 'axios';
import { config } from '../../api-config';

export const IngredientsAxios = axios.create({
  baseURL: `${config.API_BASE_URL}/ingredients.json`,
});
