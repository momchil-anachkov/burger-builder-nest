import axios from 'axios';
import { config } from '../../api-config';

/**
 * Axios instance, configured for ingredieng-related communication with Firebase.
 *
 * @constant
 */
export const IngredientsAxios = axios.create({
  baseURL: `${config.API_BASE_URL}/ingredients.json`,
});
