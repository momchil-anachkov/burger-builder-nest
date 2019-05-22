import axios from 'axios';
import { config } from '../../api-config';

export const AuthenticationAxios = axios.create({
  baseURL: `https://www.googleapis.com/identitytoolkit/v3/relyingparty`,
});
