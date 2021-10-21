import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { UserActionType } from '../action-types'
import { UserAction } from '../actions'
import { mainUsersURL, getErrorMessageFromResponse } from '../../utils'
import { IUserList } from '../../interfaces'

export const findUsers = () => {
    return async (dispatch: Dispatch<UserAction>): Promise<void> => {
        dispatch({
            type: UserActionType.GET_ALL_USERS_REQUEST,
        })

        try {
            const res: AxiosResponse<IUserList> = await axios.get(
                `${mainUsersURL()}`
            )
            dispatch({
                type: UserActionType.GET_ALL_USERS_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: UserActionType.GET_ALL_USERS_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}
