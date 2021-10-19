import { Dispatch } from 'redux'
import { BankActionType } from '../action-types'
import { BankAction } from '../actions'

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<BankAction>): void => {
        dispatch({
            type: BankActionType.DEPOSIT,
            payload: amount,
        })
    }
}

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<BankAction>): void => {
        dispatch({
            type: BankActionType.WITHDRAW,
            payload: amount,
        })
    }
}

export const bankrupt = () => {
    return (dispatch: Dispatch<BankAction>): void => {
        dispatch({
            type: BankActionType.BANKRUPT,
        })
    }
}
