import { IPublisherList } from '../../interfaces'
import { PublisherActionType } from '../action-types'
import { PublisherAction } from '../actions'

type IState = {
    loading: boolean
    publishers: IPublisherList | []
    error: string | null
}

const initialState = {
    loading: false,
    publishers: [],
    error: null,
}

const findPublishersReducer = (
    state: IState = initialState,
    action: PublisherAction
): IState => {
    switch (action.type) {
        case PublisherActionType.GET_ALL_PUBLISHERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case PublisherActionType.GET_ALL_PUBLISHERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                publishers: action.payload,
            }
        case PublisherActionType.CREATE_PUBLISHER_SUCCESS:
            return {
                ...state,
                publishers: [action.payload, ...state.publishers],
            }
        case PublisherActionType.UPDATE_PUBLISHER_SUCCESS:
            return {
                ...state,
                publishers: state.publishers.map((publisher) => {
                    if (publisher.id === action.payload.id) {
                        return action.payload
                    }
                    return publisher
                }),
            }
        case PublisherActionType.GET_ALL_PUBLISHERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default findPublishersReducer
