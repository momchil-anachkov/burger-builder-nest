import { Module } from '@nestjs/common';
import { IngredientsController } from './ingredients.controller';
import { IngredientsService } from './ingredients.service';
import { AXIOS } from '../core/tokens';
import { IngredientsAxios } from './ingredients.axios';

@Module({
  controllers: [
    IngredientsController,
  ],
  providers: [
    IngredientsService,
    {
      provide: AXIOS,
      useValue: IngredientsAxios,
    },
  ],
})
export class IngredientsModule { }
