import { Controller, Post, Body } from '@nestjs/common';
import { AuthBody } from './authentication.types';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly authentication: AuthenticationService,
  ) {
  }

  @Post('signup')
  public signUp(@Body() signUpBody: AuthBody): Promise<any> {
    return this.authentication.signUp(signUpBody);
  }

  @Post('signin')
  public signIn(@Body() signInBody: AuthBody): Promise<any> {
    return this.authentication.signIn(signInBody);
  }

}
