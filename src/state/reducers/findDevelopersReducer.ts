import { IDeveloperList } from '../../interfaces'
import { DeveloperActionType } from '../action-types'
import { DeveloperAction } from '../actions'

type IState = {
    loading: boolean
    developers: IDeveloperList | []
    error: string | null
}

const initialState = {
    loading: false,
    developers: [],
    error: null,
}

const findDevelopersReducer = (
    state: IState = initialState,
    action: DeveloperAction
): IState => {
    switch (action.type) {
        case DeveloperActionType.GET_ALL_DEVELOPERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case DeveloperActionType.GET_ALL_DEVELOPERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                developers: action.payload,
            }
        case DeveloperActionType.CREATE_DEVELOPER_SUCCESS:
            return {
                ...state,
                developers: [action.payload, ...state.developers],
            }
        case DeveloperActionType.UPDATE_DEVELOPER_SUCCESS:
            return {
                ...state,
                developers: state.developers.map((developer) => {
                    if (developer.id === action.payload.id) {
                        return action.payload
                    }
                    return developer
                }),
            }
        case DeveloperActionType.GET_ALL_DEVELOPERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default findDevelopersReducer
