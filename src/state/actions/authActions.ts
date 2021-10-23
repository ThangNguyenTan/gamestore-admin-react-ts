import { AuthActionType } from '../action-types'
import { IUserAuth } from '../../interfaces'

interface AuthSignInRequestAction {
    type: AuthActionType.AUTH_SIGN_IN_REQUEST
}
interface AuthSignInSuccessAction {
    type: AuthActionType.AUTH_SIGN_IN_SUCCESS
    payload: IUserAuth
}
interface AuthSignInFailAction {
    type: AuthActionType.AUTH_SIGN_IN_FAIL
    payload: string
}

interface AuthLogoutRequestAction {
    type: AuthActionType.AUTH_LOGOUT
}

export type AuthAction =
    | AuthSignInRequestAction
    | AuthSignInSuccessAction
    | AuthSignInFailAction
    | AuthLogoutRequestAction
