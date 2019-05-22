import { Injectable, Inject, HttpException } from '@nestjs/common';
import { AXIOS } from '../core/tokens';
import { AxiosInstance } from 'axios';
import { stringify } from 'querystring';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(AXIOS) private readonly axios: AxiosInstance,
  ) {
  }
  getAll(authenticationToken: string) {
    return this.axios.get('', { params: {auth: authenticationToken} })
      .then(response => response.data)
      .catch(error => {
        throw new HttpException(error.message, error.response.status);
      });
  }

  saveOrder(authenticationToken: string, order) {
    return this.axios.post('', order, { params: { auth: authenticationToken } })
      .then(response => response.data)
      .catch(error => {
        throw new HttpException(error.message, error.response.status);
      });
  }
}
