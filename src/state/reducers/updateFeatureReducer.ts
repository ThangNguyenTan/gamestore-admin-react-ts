import { IFeature } from '../../interfaces'
import { FeatureActionType } from '../action-types'
import { FeatureAction } from '../actions'

type IState = {
    loading: boolean
    feature: IFeature | null
    error: string | null
}

const initialState = {
    loading: false,
    feature: null,
    error: null,
}

const updateFeatureReducer = (
    state: IState = initialState,
    action: FeatureAction
): IState => {
    switch (action.type) {
        case FeatureActionType.UPDATE_FEATURE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case FeatureActionType.UPDATE_FEATURE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                feature: action.payload,
            }
        case FeatureActionType.UPDATE_FEATURE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default updateFeatureReducer
