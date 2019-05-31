import { ApiModelProperty } from '@nestjs/swagger';

/**
 * DTO for auth-related communication with Firebase and client apps
 *
 * @export
 * @interface AuthBody
 */
export class AuthBody {

  /**
   * User's email
   *
   * @type {string}
   * @memberof AuthBody
   */
  email: string;

  /**
   * User's password
   *
   * @type {string}
   * @memberof AuthBody
   */
  password: string;

  /**
   * Required by Firebase. Should always be true
   *
   * @type {boolean}
   * @memberof AuthBody
   */
  returnSecureToken: boolean;
}
