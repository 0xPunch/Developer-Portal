import { Demos } from './../mocks/demo';
export interface IEmulator {
  name: string;
  toggleApi: boolean;
  segment: Demos | undefined; // Handle this so we can define specific segment in Peyya-application. egs. Create user, send money.
  config?: {
    client_secret: string;
    client_id: string;
    name?: string;
    ApiHost?: string;
    ApiEndpoints?: { [key: string]: string };
  };
}
