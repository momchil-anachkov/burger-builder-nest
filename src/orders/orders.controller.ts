import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Request } from 'express';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orders: OrdersService) {}

  @Get()
  getAllOrders(@Req() request: Request) {
    return this.orders.getAll(request.query.auth);
  }

  @Post()
  saveOrder(@Req() request: Request, @Body() orderDto) {
    return this.orders.saveOrder(request.query.auth, orderDto);
  }
}
