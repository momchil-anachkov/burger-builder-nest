import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Request } from 'express';

/**
 * Responsible for defining and handling API routes related to orders
 *
 * @export
 * @class OrdersController
 */
@Controller('orders')
export class OrdersController {
  constructor(private readonly orders: OrdersService) {}

  /**
   * Handles requests for fetching all the orders
   *
   * @param {Request} request
   * @returns
   * @memberof OrdersController
   */
  @Get('all')
  getAllOrders(@Req() request: Request) {
    return this.orders.getAll(request.query.auth);
  }

  /**
   * Handles requests for fetching orders for a specific user
   *
   * @param {Request} request
   * @returns
   * @memberof OrdersController
   */
  @Get('byUser')
  getOrdersByUser(@Req() request: Request) {
    return this.orders.getByUser(request.query.auth, request.body.userId);
  }

  /**
   * Handles requests for submitting a new order
   *
   * @param {Request} request
   * @param {*} orderDto
   * @returns
   * @memberof OrdersController
   */
  @Post()
  saveOrder(@Req() request: Request, @Body() orderDto) {
    return this.orders.saveOrder(request.query.auth, orderDto);
  }
}
