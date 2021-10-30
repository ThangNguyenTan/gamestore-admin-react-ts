import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { OrderActionType } from '../action-types'
import { OrderAction } from '../actions'
import {
    mainOrdersURL,
    getErrorMessageFromResponse,
    createAuthorizedRequestHeader,
} from '../../utils'
import { IOrderList } from '../../interfaces'
import { RootState } from '../reducers/index'

export const getAllOrders = () => {
    return async (
        dispatch: Dispatch<OrderAction>,
        getState: () => RootState
    ): Promise<void> => {
        dispatch({
            type: OrderActionType.GET_ALL_ORDERS_REQUEST,
        })

        try {
            const { authReducer } = getState()
            const { currentUser } = authReducer

            const res: AxiosResponse<IOrderList> = await axios.get(
                `${mainOrdersURL()}`,
                {
                    headers: {
                        Authorization: createAuthorizedRequestHeader(
                            currentUser
                        ),
                    },
                }
            )
            dispatch({
                type: OrderActionType.GET_ALL_ORDERS_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: OrderActionType.GET_ALL_ORDERS_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}
