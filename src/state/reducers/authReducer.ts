import { IUserAuth } from '../../interfaces'
import { AuthActionType } from '../action-types'
import { AuthAction } from '../actions'

type IState = {
    loading: boolean
    currentUser: IUserAuth | null
    error: string | null
}

const initialState = {
    loading: false,
    currentUser: localStorage.getItem('currentUser')
        ? JSON.parse(localStorage.getItem('currentUser')!)
        : null,
    error: null,
}

const authReducer = (
    state: IState = initialState,
    action: AuthAction
): IState => {
    switch (action.type) {
        case AuthActionType.AUTH_SIGN_IN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case AuthActionType.AUTH_SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                currentUser: action.payload,
            }
        case AuthActionType.AUTH_SIGN_IN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case AuthActionType.AUTH_LOGOUT:
            return {
                ...state,
                loading: false,
                currentUser: null,
                error: null,
            }
        default:
            return state
    }
}

export default authReducer
