import { BankActionType } from '../action-types/index'
import { BankAction } from '../actions'

const initialState = 0

const bankReducer = (
    state: number = initialState,
    action: BankAction
): number => {
    switch (action.type) {
        case BankActionType.DEPOSIT:
            return state + action.payload
        case BankActionType.WITHDRAW:
            return state - action.payload
        case BankActionType.BANKRUPT:
            return 0
        default:
            return state
    }
}

export default bankReducer
