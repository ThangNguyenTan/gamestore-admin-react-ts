import { IOrderList } from '../../interfaces'
import { OrderActionType } from '../action-types'
import { OrderAction } from '../actions'

type IState = {
    loading: boolean
    orders: IOrderList | []
    error: string | null
}

const initialState = {
    loading: false,
    orders: [],
    error: null,
}

const findOrdersReducer = (
    state: IState = initialState,
    action: OrderAction
): IState => {
    switch (action.type) {
        case OrderActionType.GET_ALL_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case OrderActionType.GET_ALL_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                orders: action.payload,
            }
        case OrderActionType.GET_ALL_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default findOrdersReducer
