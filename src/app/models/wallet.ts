export type WalletId = string;

export interface IWallet {
  id: WalletId;
  address: string;
  balance: number;
}
