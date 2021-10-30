import { OrderActionType } from '../action-types'
import { IOrderList } from '../../interfaces'

interface GetAllOrdersRequestAction {
    type: OrderActionType.GET_ALL_ORDERS_REQUEST
}
interface GetAllOrdersSuccessAction {
    type: OrderActionType.GET_ALL_ORDERS_SUCCESS
    payload: IOrderList
}
interface GetAllOrdersFailAction {
    type: OrderActionType.GET_ALL_ORDERS_FAIL
    payload: string
}

export type OrderAction =
    | GetAllOrdersRequestAction
    | GetAllOrdersSuccessAction
    | GetAllOrdersFailAction
