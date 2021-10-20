import { IDeveloper } from '../../interfaces'
import { DeveloperActionType } from '../action-types'
import { DeveloperAction } from '../actions'

type IState = {
    loading: boolean
    developer: IDeveloper | null
    error: string | null
}

const initialState = {
    loading: false,
    developer: null,
    error: null,
}

const createDeveloperReducer = (
    state: IState = initialState,
    action: DeveloperAction
): IState => {
    switch (action.type) {
        case DeveloperActionType.CREATE_DEVELOPER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case DeveloperActionType.CREATE_DEVELOPER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                developer: action.payload,
            }
        case DeveloperActionType.CREATE_DEVELOPER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default createDeveloperReducer
