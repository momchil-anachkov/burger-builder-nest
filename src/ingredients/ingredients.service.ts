import { Injectable, Inject } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import { AXIOS } from '../core/tokens';
import { stringify } from 'querystring';

@Injectable()
export class IngredientsService {
  constructor(
    @Inject(AXIOS) private readonly ingredients: AxiosInstance,
  ) {
  }

  getAll(authenticationToken: string) {
    return this.ingredients.get('', { params: { auth: authenticationToken } })
      .then(result => result.data);
  }
}
