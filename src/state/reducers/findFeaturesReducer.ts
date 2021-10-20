import { IFeatureList } from '../../interfaces'
import { FeatureActionType } from '../action-types'
import { FeatureAction } from '../actions'

type IState = {
    loading: boolean
    features: IFeatureList | []
    error: string | null
}

const initialState = {
    loading: false,
    features: [],
    error: null,
}

const findFeaturesReducer = (
    state: IState = initialState,
    action: FeatureAction
): IState => {
    switch (action.type) {
        case FeatureActionType.GET_ALL_FEATURES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case FeatureActionType.GET_ALL_FEATURES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                features: action.payload,
            }
        case FeatureActionType.CREATE_FEATURE_SUCCESS:
            return {
                ...state,
                features: [action.payload, ...state.features],
            }
        case FeatureActionType.UPDATE_FEATURE_SUCCESS:
            return {
                ...state,
                features: state.features.map((feature) => {
                    if (feature.id === action.payload.id) {
                        return action.payload
                    }
                    return feature
                }),
            }
        case FeatureActionType.GET_ALL_FEATURES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default findFeaturesReducer
