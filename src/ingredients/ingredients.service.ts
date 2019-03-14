import { Injectable, Inject } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import { AXIOS } from '../core/tokens';

@Injectable()
export class IngredientsService {
  constructor(
    @Inject(AXIOS) private readonly ingredients: AxiosInstance,
  ) {
  }

  getAll() {
    return this.ingredients.get('')
      .then(result => result.data);
  }
}
