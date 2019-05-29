import { Controller, Get, Req } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { Request } from 'express';

/**
 * Responsible for defining and handling API routes related to ingrediengs
 *
 * @export
 * @class IngredientsController
 */
@Controller('ingredients')
export class IngredientsController {

  /**
   * Creates an instance of IngredientsController
   *
   * @param {IngredientsService} ingredients
   * @memberof IngredientsController
   */
  constructor(
    private readonly ingredients: IngredientsService,
  ) {
  }

  /**
   * Handles requests for fetching all the ingrediengs
   *
   * @param {Request} request
   * @returns
   * @memberof IngredientsController
   */
  @Get()
  getAllIngredients(@Req() request: Request) {
    return this.ingredients.getAll(request.query.auth);
  }
}
