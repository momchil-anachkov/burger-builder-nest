import axios from 'axios';

/**
 * Axios instance, configured for auth-related communication with Firebase.
 *
 * @constant
 */
export const AuthenticationAxios = axios.create({
  baseURL: `https://www.googleapis.com/identitytoolkit/v3/relyingparty`,
});
