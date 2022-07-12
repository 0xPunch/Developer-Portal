import { Demos } from '../mocks/demo';

export interface IDemo {
  name: Demos | undefined;
}

export interface IDemoCurrency {
  symbol: string;
  code: string;
}
