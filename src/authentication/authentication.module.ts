import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { AXIOS } from '../core/tokens';
import { AuthenticationAxios } from './authentication.axios';

/**
 * Aggregates the authentication functionality of the app.
 *
 * @export
 * @class AuthenticationModule
 */
@Module({
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
    {
      provide: AXIOS,
      useValue: AuthenticationAxios,
    },
  ],
})
export class AuthenticationModule {}
