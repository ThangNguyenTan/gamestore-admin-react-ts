import { IUserList } from '../../interfaces'
import { UserActionType } from '../action-types'
import { UserAction } from '../actions'

type IState = {
    loading: boolean
    users: IUserList | []
    error: string | null
}

const initialState = {
    loading: false,
    users: [],
    error: null,
}

const findUsersReducer = (
    state: IState = initialState,
    action: UserAction
): IState => {
    switch (action.type) {
        case UserActionType.GET_ALL_USERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case UserActionType.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                users: action.payload,
            }
        case UserActionType.GET_ALL_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default findUsersReducer
