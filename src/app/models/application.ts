export interface IApplication {
  name: string;
  id: string;
  client_secret: string;
  client_id: string;
  sandbox: boolean;
}

export interface IApplicationResponse {
  status: number;
  applications: IApplication | IApplication[];
  message: string;
}
