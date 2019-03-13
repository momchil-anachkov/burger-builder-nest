import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrdersAxios } from './orders.axios';
import { AXIOS } from '../core/tokens';

@Module({
  controllers: [
    OrdersController,
  ],
  providers: [
    OrdersService,
    {
      provide: AXIOS,
      useValue: OrdersAxios,
    },
  ],
})
export class OrdersModule {
}
