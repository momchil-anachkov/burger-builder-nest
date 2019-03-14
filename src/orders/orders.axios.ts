import axios from 'axios';
import { config } from '../../api-config';

export const OrdersAxios = axios.create({
  baseURL: `${config.API_BASE_URL}/orders.json`,
  // baseURL: config.API_BASE_URL + '/orders.json',
});
