import { ICode } from './code';
import { IEmulator } from './emulator';

export type GuideHeadline = string;
export type GuideText = string;

export enum GuideComponentTypes {
  code = 'code',
  emulator = 'emulator',
}

export interface IGuideComponent {
  type: GuideComponentTypes;
  config?: IEmulator | ICode | GuideHeadline | GuideText | any;
}

export interface IGuideSegment {
  headline?: GuideHeadline;
  subHeadline?: GuideHeadline;
  text?: GuideText;
  hideInNav?: boolean;
  components?: Array<IGuideComponent>;
}

export interface IGuide {
  segments: IGuideSegment[];
}

export interface IGuideConfig {
  client_secret: string;
  client_id: string;
  name?: string;
  ApiHost?: string;
  ApiEndpoints?: { [key: string]: string };
}