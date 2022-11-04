export interface IApplication {
  name: string;
  id: string;
  clientsecret: string;
  clientid: string;
  sandbox: boolean;
  use_credentials: boolean;
}

export interface IApplicationResponse {
  status: number;
  applications: IApplication | IApplication[];
  message: string;
}
