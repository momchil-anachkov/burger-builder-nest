import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly orders: OrdersService,
  ) {
  }

  @Get()
  getAllOrders() {
    return this.orders.getAll();
  }

  @Post()
  saveOrder(@Body() orderDto) {
    return this.orders.saveOrder(orderDto);
  }

}
