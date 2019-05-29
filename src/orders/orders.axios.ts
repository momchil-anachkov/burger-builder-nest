import axios from 'axios';
import { config } from '../../api-config';

/**
 * Axios instance, configured for order-related communication with Firebase.
 *
 * @constant
 */
export const OrdersAxios = axios.create({
  baseURL: `${config.API_BASE_URL}/orders.json`,
});
