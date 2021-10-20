import { IPublisher } from '../../interfaces'
import { PublisherActionType } from '../action-types'
import { PublisherAction } from '../actions'

type IState = {
    loading: boolean
    publisher: IPublisher | null
    error: string | null
}

const initialState = {
    loading: false,
    publisher: null,
    error: null,
}

const getPublisherReducer = (
    state: IState = initialState,
    action: PublisherAction
): IState => {
    switch (action.type) {
        case PublisherActionType.GET_PUBLISHER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case PublisherActionType.GET_PUBLISHER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                publisher: action.payload,
            }
        case PublisherActionType.GET_PUBLISHER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default getPublisherReducer
