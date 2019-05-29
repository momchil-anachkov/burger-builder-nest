import { Injectable, Inject, HttpException } from '@nestjs/common';
import { AXIOS } from '../core/tokens';
import { AxiosInstance } from 'axios';

/**
 * Responsible for order-related communication with the Firebase API
 *
 * @export
 * @class OrdersService
 */
@Injectable()
export class OrdersService {

  /**
   * Creates an instance of OrdersService
   * @param {AxiosInstance} axios
   * @memberof OrdersService
   */
  constructor(@Inject(AXIOS) private readonly axios: AxiosInstance) {}

  /**
   * Get all the orders
   * @param {string} authenticationToken
   * @returns {Promise<any>}
   * @memberof OrdersService
   */
  getAll(authenticationToken: string): Promise<any> {
    return this.axios
      .get('', { params: { auth: authenticationToken } })
      .then((response) => response.data)
      .catch((error) => {
        throw new HttpException(error.message, error.response.status);
      });
  }

  /**
   * Get the orders for a specific user
   * @param {string} authenticationToken
   * @param {string} userId
   * @returns {Promise<any>}
   * @memberof OrdersService
   */
  getByUser(authenticationToken: string, userId: string): Promise<any> {
    return this.axios
      .get('', {
        params: {
          auth: authenticationToken,
          orderBy: 'userId',
          equalTo: userId,
      },
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new HttpException(error.message, error.response.status);
      });
  }

  /**
   * Save a new order
   * @param {string} authenticationToken
   * @param {*} order
   * @returns {Promise<any>}
   * @memberof OrdersService
   */
  saveOrder(authenticationToken: string, order: any): Promise<any> {
    return this.axios
      .post('', order, { params: { auth: authenticationToken } })
      .then((response) => response.data)
      .catch((error) => {
        throw new HttpException(error.message, error.response.status);
      });
  }
}
