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
    return this.axios.get('')
      .then(response => response.data);
  }

  saveOrder(order) {
    return this.axios.post('', order)
      .then(response => response.data);
  }
}
