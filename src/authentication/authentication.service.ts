import { Injectable, Inject, HttpException } from '@nestjs/common';
import { AuthBody } from './authentication.types';
import { AXIOS } from '../core/tokens';
import { config } from '../../api-config';
import { AxiosInstance } from 'axios';

/**
 * Responsible for auth-related communication with the Firebase API
 *
 * @export
 * @class AuthenticationService
 */
@Injectable()
export class AuthenticationService {

  /**
   * Creates an instance of AuthenticationService.
   *
   * @param {AxiosInstance} authenticaiton
   * @memberof AuthenticationService
   */
  constructor(
    @Inject(AXIOS) private readonly authenticaiton: AxiosInstance,
  ) {
  }

  /**
   * Signs up a new user
   *
   * @param {AuthBody} signUpBody
   * @returns {Promise<any>}
   * @memberof AuthenticationService
   */
  public signUp(signUpBody: AuthBody): Promise<any> {
    return this.authenticaiton.post(`/signupNewUser?key=${config.API_KEY}`, signUpBody)
      .then(response => response.data)
      .catch(this.handleError);
  }

  /**
   * Signs in an existing user
   *
   * @param {AuthBody} signInBody
   * @returns {Promise<any>}
   * @memberof AuthenticationService
   */
  public signIn(signInBody: AuthBody): Promise<any> {
    return this.authenticaiton.post(`/verifyPassword?key=${config.API_KEY}`, signInBody)
      .then(response => response.data)
      .catch(this.handleError);
  }

  /**
   * Handles communication errors, extracting only the relevant data
   *
   * @private
   * @param {*} error
   * @memberof AuthenticationService
   */
  private handleError(error) {
    throw new HttpException({
      ...error.response.data,
      message: error.message,
    }, error.response.status);
  }

}
