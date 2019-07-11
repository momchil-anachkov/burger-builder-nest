import { Injectable, Inject, HttpException } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import { AXIOS } from '../core/tokens';

/**
 * Responsible for ingredient-related communication with the Firebase API
 *
 * @export
 * @class IngredientsService
 */
@Injectable()
export class IngredientsService {

  /**
   * Creates an instance of IngredientsService.
   *
   * @param {AxiosInstance} ingredients
   * @memberof IngredientsService
   */
  constructor(
    @Inject(AXIOS) private readonly ingredients: AxiosInstance,
  ) {
  }

  /**
   * Gets all the ingredients
   *
   * @param {string} authenticationToken
   * @returns
   * @memberof IngredientsService
   */
  getAll(authenticationToken: string) {
    return this.ingredients.get('', { params: { auth: authenticationToken } })
      .then(result => result.data)
      .catch((error) => {
        throw new HttpException(error.message, error.response.status);
      });
  }
}
