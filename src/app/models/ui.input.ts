export enum InputType {
  text = 'text',
  checkbox = 'checkbox',
  country = 'country',
  select = 'select',
  number = 'number',
  phone = 'phone',
  email = 'email',
  password = 'password',
}
export enum InputTheme {
  dark = 'dark',
  light = 'light',
}

export interface IInput {
  type: InputType;
  id?: string;
  initValue?: any;
  options?: any[];
  required?: boolean;
  disabled?: boolean;
  name?: string;
  label?: string;
  subLabel?: string;
  theme?: InputTheme;
  hidden?: boolean;
  isLast?: boolean;
  placeholder?: string;
}
