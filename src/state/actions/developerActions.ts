import { DeveloperActionType } from '../action-types'
import { IDeveloper, IDeveloperList } from '../../interfaces'

interface GetAllDevelopersRequestAction {
    type: DeveloperActionType.GET_ALL_DEVELOPERS_REQUEST
}
interface GetAllDevelopersSuccessAction {
    type: DeveloperActionType.GET_ALL_DEVELOPERS_SUCCESS
    payload: IDeveloperList
}
interface GetAllDevelopersFailAction {
    type: DeveloperActionType.GET_ALL_DEVELOPERS_FAIL
    payload: string
}

interface GetDeveloperRequestAction {
    type: DeveloperActionType.GET_DEVELOPER_REQUEST
}
interface GetDeveloperSuccessAction {
    type: DeveloperActionType.GET_DEVELOPER_SUCCESS
    payload: IDeveloper
}
interface GetDeveloperFailAction {
    type: DeveloperActionType.GET_DEVELOPER_FAIL
    payload: string
}

interface CreateDeveloperRequestAction {
    type: DeveloperActionType.CREATE_DEVELOPER_REQUEST
}
interface CreateDeveloperSuccessAction {
    type: DeveloperActionType.CREATE_DEVELOPER_SUCCESS
    payload: IDeveloper
}
interface CreateDeveloperFailAction {
    type: DeveloperActionType.CREATE_DEVELOPER_FAIL
    payload: string
}

interface UpdateDeveloperRequestAction {
    type: DeveloperActionType.UPDATE_DEVELOPER_REQUEST
}
interface UpdateDeveloperSuccessAction {
    type: DeveloperActionType.UPDATE_DEVELOPER_SUCCESS
    payload: IDeveloper
}
interface UpdateDeveloperFailAction {
    type: DeveloperActionType.UPDATE_DEVELOPER_FAIL
    payload: string
}

export type DeveloperAction =
    | GetAllDevelopersRequestAction
    | GetAllDevelopersSuccessAction
    | GetAllDevelopersFailAction
    | GetDeveloperRequestAction
    | GetDeveloperSuccessAction
    | GetDeveloperFailAction
    | CreateDeveloperRequestAction
    | CreateDeveloperSuccessAction
    | CreateDeveloperFailAction
    | UpdateDeveloperRequestAction
    | UpdateDeveloperSuccessAction
    | UpdateDeveloperFailAction
