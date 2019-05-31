import { Controller, Get, Query } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';

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
   * @param {string} authenticationToken
   * @returns
   * @memberof IngredientsController
   */
  @Get()
  getAllIngredients(@Query('auth') authenticationToken: string) {
    return this.ingredients.getAll(authenticationToken);
  }
}
