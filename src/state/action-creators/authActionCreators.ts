import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { AuthActionType } from '../action-types'
import { AuthAction } from '../actions'
import { mainUsersURL, getErrorMessageFromResponse } from '../../utils'
import { IUserAuth, IUserSignIn } from '../../interfaces'

export const authSignIn = (user: IUserSignIn) => {
    return async (dispatch: Dispatch<AuthAction>): Promise<void> => {
        dispatch({
            type: AuthActionType.AUTH_SIGN_IN_REQUEST,
        })

        try {
            const res: AxiosResponse<IUserAuth> = await axios.post(
                `${mainUsersURL()}/login`,
                user
            )
            localStorage.setItem('currentUser', JSON.stringify(res.data))
            dispatch({
                type: AuthActionType.AUTH_SIGN_IN_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: AuthActionType.AUTH_SIGN_IN_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const authLogout = () => {
    return async (dispatch: Dispatch<AuthAction>): Promise<void> => {
        localStorage.removeItem('currentUser')
        dispatch({
            type: AuthActionType.AUTH_LOGOUT,
        })
    }
}
