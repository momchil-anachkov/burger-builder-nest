import { Injectable, Inject, HttpException } from '@nestjs/common';
import { AuthBody } from './authentication.types';
import { AXIOS } from '../core/tokens';
import { config } from '../../api-config';
import { AxiosInstance } from 'axios';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject(AXIOS) private readonly authenticaiton: AxiosInstance,
  ) {
  }

  public signUp(signUpBody: AuthBody): Promise<any> {
    return this.authenticaiton.post(`/signupNewUser?key=${config.API_KEY}`, signUpBody)
      .then(response => response.data)
      .catch(error => {
        throw new HttpException(error.message, error.response.status);
      });
  }

  public signIn(signInBody: AuthBody): Promise<any> {
    return this.authenticaiton.post(`/verifyPassword?key=${config.API_KEY}`, signInBody)
      .then(response => response.data)
      .catch(error => {
        throw new HttpException(error.message, error.response.status);
      });
  }
}
