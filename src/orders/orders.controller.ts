import { Controller, Get, Post, Body, Req, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';

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
   * @param {string} authenticationToken
   * @returns
   * @memberof OrdersController
   */
  @Get('all')
  getAllOrders(@Query('auth') authenticationToken: string) {
    return this.orders.getAll(authenticationToken);
  }

  /**
   * Handles requests for fetching orders for a specific user
   *
   * @param {string} authenticationToken
   * @param {string} userId
   * @returns
   * @memberof OrdersController
   */
  @Get('byUser')
  getOrdersByUser(@Query('auth') authenticationToken: string, @Query('userId') userId) {
    return this.orders.getByUser(authenticationToken, userId);
  }

  /**
   * Handles requests for submitting a new order
   *
   * @param {string} authenticationToken
   * @param {*} orderDto
   * @returns
   * @memberof OrdersController
   */
  @Post()
  saveOrder(@Req() authenticationToken: string, @Body() orderDto) {
    return this.orders.saveOrder(authenticationToken, orderDto);
  }
}
