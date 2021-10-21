import { UserActionType } from '../action-types'
import { IUserList } from '../../interfaces'

interface GetAllUsersRequestAction {
    type: UserActionType.GET_ALL_USERS_REQUEST
}
interface GetAllUsersSuccessAction {
    type: UserActionType.GET_ALL_USERS_SUCCESS
    payload: IUserList
}
interface GetAllUsersFailAction {
    type: UserActionType.GET_ALL_USERS_FAIL
    payload: string
}

export type UserAction =
    | GetAllUsersRequestAction
    | GetAllUsersSuccessAction
    | GetAllUsersFailAction
