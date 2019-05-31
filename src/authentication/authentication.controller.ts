import { Controller, Post, Body } from '@nestjs/common';
import { AuthBody } from './authentication.types';
import { AuthenticationService } from './authentication.service';

/**
 * Responsible for defining and handling API routes related to authentication
 *
 * @export
 * @class AuthenticationController
 */
@Controller('authentication')
export class AuthenticationController {

  /**
   * Creates an instance of AuthenticationController
   * @param {AuthenticationService} authentication
   * @memberof AuthenticationController
   */
  constructor(
    private readonly authentication: AuthenticationService,
  ) {
  }

  /**
   * Handles requests for signing up a new user
   *
   * @param {AuthBody} signUpBody
   * @returns {Promise<any>}
   * @memberof AuthenticationController
   */
  @Post('signup')
  public async signUp(@Body() signUpBody: AuthBody): Promise<any> {
    return this.authentication.signUp(signUpBody);
  }

  /**
   * Handles requests for signing in an existing user
   *
   * @param {AuthBody} signInBody
   * @returns {Promise<any>}
   * @memberof AuthenticationController
   */
  @Post('signin')
  public async signIn(@Body() signInBody: AuthBody): Promise<any> {
    return this.authentication.signIn(signInBody);
  }

}
