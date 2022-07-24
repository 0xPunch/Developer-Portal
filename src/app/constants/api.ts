import { environment } from 'src/environments/environment';
export const ApiHost = environment.apiHost;
export const ApiEndpoints = {
  developer: '/developer',
  wallet: '/wallet',
  payment: '/payment',
  banks: '/banks',
  application: '/developer/application',
  auth: '/authorize/phone',
  user: '/users',
};