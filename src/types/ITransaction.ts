export type TransactionType = 'receive' | 'send'

export interface ITransaction {
  target: string,
  amount: number,
  type: TransactionType
}