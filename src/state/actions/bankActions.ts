import { BankActionType } from '../action-types/index'

interface DepositAction {
    type: BankActionType.DEPOSIT
    payload: number
}

interface WithdrawAction {
    type: BankActionType.WITHDRAW
    payload: number
}

interface BankruptAction {
    type: BankActionType.BANKRUPT
}

export type BankAction = DepositAction | WithdrawAction | BankruptAction
