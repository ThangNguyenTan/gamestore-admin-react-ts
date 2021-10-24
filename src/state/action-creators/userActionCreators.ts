import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { UserActionType } from '../action-types'
import { UserAction } from '../actions'
import {
    mainUsersURL,
    getErrorMessageFromResponse,
    createAuthorizedRequestHeader,
} from '../../utils'
import { IUserList } from '../../interfaces'
import { RootState } from '../reducers'

export const findUsers = () => {
    return async (
        dispatch: Dispatch<UserAction>,
        getState: () => RootState
    ): Promise<void> => {
        dispatch({
            type: UserActionType.GET_ALL_USERS_REQUEST,
        })

        try {
            const { authReducer } = getState()
            const { currentUser } = authReducer

            const res: AxiosResponse<IUserList> = await axios.get(
                `${mainUsersURL()}`,
                {
                    headers: {
                        Authorization: createAuthorizedRequestHeader(
                            currentUser
                        ),
                    },
                }
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
