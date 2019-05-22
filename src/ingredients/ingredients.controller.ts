import { Controller, Get, Req } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { Request } from 'express';

@Controller('ingredients')
export class IngredientsController {
  constructor(
    private readonly ingredients: IngredientsService,
  ) {
  }

  @Get()
  getAllIngredients(@Req() request: Request) {
    return this.ingredients.getAll(request.query.auth);
  }
}
