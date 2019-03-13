import { Injectable, Inject } from '@nestjs/common';
import { AXIOS } from '../core/tokens';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(AXIOS) private readonly axios,
  ) {
  }
  getAll() {
    return { message: 'Hello Orders from Service' };
  }

  saveOrder(order) {
    this.axios.post('/orders.json', order)
      .then(response => response.data);
  }
}
