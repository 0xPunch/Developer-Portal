import { IGuideConfig } from 'src/app/models/guide';
import { IEmulator } from 'src/app/models/emulator';
import { Demos } from './demo';

export const EmulatorCreateUserMock = (config: IGuideConfig): IEmulator => {
  return {
    name: 'Update new user',
    toggleApi: true,
    segment: Demos.createUser,
    config,
  };
};

export const EmulatorAuthUserMock = (config: IGuideConfig): IEmulator => {
  return {
    name: 'Authenticate user',
    toggleApi: true,
    segment: Demos.auth,
    config,
  };
};

export const EmulatorPickBankMock = (config: IGuideConfig): IEmulator => {
  return {
    name: 'Pick bank',
    toggleApi: true,
    segment: Demos.banks,
    config,
  };
};

export const EmulatorWalletTransferMock = (config: IGuideConfig): IEmulator => {
  return {
    name: 'Wallet transfer',
    toggleApi: true,
    segment: Demos.wallet,
    config,
  };
};

export const EmulatorPaymentMock = (config: IGuideConfig): IEmulator => {
  return {
    name: 'Payment',
    toggleApi: true,
    segment: Demos.payment,
    config,
  };
};
