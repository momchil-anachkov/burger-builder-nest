import { Injectable, Inject } from '@nestjs/common';
import { AXIOS } from '../core/tokens';
import { AxiosInstance } from 'axios';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(AXIOS) private readonly axios: AxiosInstance,
  ) {
  }
  getAll() {
    return { message: 'Hello Orders from Service' };
  }

  saveOrder(order) {
    this.axios.post('', order)
      .then(response => response.data);
  }
}
