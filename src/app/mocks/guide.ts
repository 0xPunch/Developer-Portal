import {
  IGuide,
  IGuideSegment,
  IGuideComponent,
  GuideComponentTypes,
  IGuideConfig,
} from 'src/app/models/guide';
import {
  EmulatorCreateUserMock,
  EmulatorAuthUserMock,
  EmulatorPickBankMock,
  EmulatorWalletTransferMock,
  EmulatorPaymentMock,
  EmulatorSendMoneyMock,
} from './emulator';
import {
  CodeConnectBankMock,
  CodeCreateUserMock,
  CodeAuthMock,
  CodeWalletTransferMock,
  CodePaymentMock,
  CodeGoodToKnowMock,
} from './code';

export const GuideCreateAccountCodeComponent = (
  config: IGuideConfig
): IGuideComponent => {
  return {
    type: GuideComponentTypes.code,
    config: CodeCreateUserMock(config),
  };
};

export const GuideGoodToKnowCodeComponent = (
  config: IGuideConfig
): IGuideComponent => {
  return {
    type: GuideComponentTypes.code,
    config: CodeGoodToKnowMock(config),
  };
};

export const GuideAuthCodeComponent = (
  config: IGuideConfig
): IGuideComponent => {
  return {
    type: GuideComponentTypes.code,
    config: CodeAuthMock(config),
  };
};

export const GuideAuthEmulatorComponent = (
  config: IGuideConfig
): IGuideComponent => {
  return {
    type: GuideComponentTypes.emulator,
    config: EmulatorAuthUserMock(config),
  };
};

export const GuideCreateAccountEmulatorComponent = (
  config: IGuideConfig
): IGuideComponent => {
  return {
    type: GuideComponentTypes.emulator,
    config: EmulatorCreateUserMock(config),
  };
};

export const GuideStartSegmentMock = (config: IGuideConfig): IGuideSegment => {
  return {
    headline: 'Getting started',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eos vel eligendi facilis aspernatur, nihil assumenda quisquam dolor? Nihil commodi facilis, totam eveniet aut ea modi necessitatibus rerum reprehenderit sit?',
    hideInNav: false,
    components: [],
  };
};

export const GuideGoodToKnowSegmentMock = (
  config: IGuideConfig
): IGuideSegment => {
  return {
    headline: 'Good to know',
    text: 'Before you start. This some of the most essentials we think you should know. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eos vel eligendi facilis aspernatur, nihil assumenda quisquam dolor? Nihil commodi facilis, totam eveniet aut ea modi necessitatibus rerum reprehenderit sit?',
    hideInNav: false,
    components: [GuideGoodToKnowCodeComponent(config)],
  };
};

export const GuideAuthSegmentMock = (config: IGuideConfig): IGuideSegment => {
  return {
    headline: 'Authenticate by mobile',
    text: 'Authenitcating a user will return a token, this token is needed in every request. The token includes your client id. And will only work for that application. If a user doesn´t exists, a new user will be created. Important to follow the format of "+nn nn nnnnnnn" Next step is to complete user account. See "complete new user"segment',
    hideInNav: false,
    components: [
      GuideAuthCodeComponent(config),
      GuideAuthEmulatorComponent(config),
    ],
  };
};

export const GuideCompleteAccountSegmentMock = (
  config: IGuideConfig
): IGuideSegment => {
  return {
    headline: 'KYC',
    text: 'You need to complete your account to do any further actions. \n Complete your account by calling user endpoint with your {peyyaUserId}. In your body you need to pass {firstName} and {lastName}. You´ll always need your {authToken} in your headers. See example below.',
    hideInNav: false,
    components: [
      GuideCreateAccountCodeComponent(config),
      GuideCreateAccountEmulatorComponent(config),
    ],
  };
};

// Connect bank

export const GuideConnectBankCodeComponent = (
  config: IGuideConfig
): IGuideComponent => {
  return {
    type: GuideComponentTypes.code,
    config: CodeConnectBankMock(config),
  };
};

export const GuideConnectBankEmulatorComponent = (
  config: IGuideConfig
): IGuideComponent => {
  return {
    type: GuideComponentTypes.emulator,
    config: EmulatorPickBankMock(config),
  };
};

export const GuideConnectBankSegmentMock = (
  config: IGuideConfig
): IGuideSegment => {
  return {
    headline: 'Connect bank',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eos vel eligendi facilis aspernatur, nihil assumenda quisquam dolor? Nihil commodi facilis, totam eveniet aut ea modi necessitatibus rerum reprehenderit sit?',
    hideInNav: false,
    components: [
      GuideConnectBankCodeComponent(config),
      GuideConnectBankEmulatorComponent(config),
    ],
  };
};

// Wallet

export const GuideWalletCodeComponent = (
  config: IGuideConfig
): IGuideComponent => {
  return {
    type: GuideComponentTypes.code,
    config: CodeWalletTransferMock(config),
  };
};

export const GuideWalletEmulatorComponent = (
  config: IGuideConfig
): IGuideComponent => {
  return {
    type: GuideComponentTypes.emulator,
    config: EmulatorWalletTransferMock(config),
  };
};

export const GuideTransferBankSegmentMock = (
  config: IGuideConfig
): IGuideSegment => {
  return {
    headline: 'Top up wallet',
    text: 'Make a seamless transfer between your wallet and your bank. You will be able to setup rules.',
    hideInNav: false,
    components: [
      GuideWalletCodeComponent(config),
      GuideWalletEmulatorComponent(config),
    ],
  };
};

// Send money

export const GuideSendMoneyEmulatorComponent = (
  config: IGuideConfig
): IGuideComponent => {
  return {
    type: GuideComponentTypes.emulator,
    config: EmulatorSendMoneyMock(config),
  };
};

export const GuideSendMoneySegmentMock = (
  config: IGuideConfig
): IGuideSegment => {
  return {
    headline: 'Send money',
    text: 'Send money to a wallet or iban',
    hideInNav: false,
    components: [GuideSendMoneyEmulatorComponent(config)],
  };
};

// Payment

export const GuidePaymentCodeComponent = (
  config: IGuideConfig
): IGuideComponent => {
  return {
    type: GuideComponentTypes.code,
    config: CodePaymentMock(config),
  };
};

export const GuidePaymentEmulatorComponent = (
  config: IGuideConfig
): IGuideComponent => {
  return {
    type: GuideComponentTypes.emulator,
    config: EmulatorPaymentMock(config),
  };
};

export const GuideCreatePaymentSegmentMock = (
  config: IGuideConfig
): IGuideSegment => {
  return {
    headline: 'Create payment',
    text: 'Create a payment with your wallet.',
    hideInNav: false,
    components: [
      GuidePaymentCodeComponent(config),
      GuidePaymentEmulatorComponent(config),
    ],
  };
};

export const GuideMock = (config: IGuideConfig): IGuide => {
  return {
    segments: [
      GuideStartSegmentMock(config),
      GuideGoodToKnowSegmentMock(config),
      GuideAuthSegmentMock(config),
      GuideCompleteAccountSegmentMock(config),
      GuideConnectBankSegmentMock(config),
      GuideTransferBankSegmentMock(config),
      GuideSendMoneySegmentMock(config),
      GuideCreatePaymentSegmentMock(config),
    ],
  };
};
