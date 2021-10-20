import { FeatureActionType } from '../action-types'
import { IFeature, IFeatureList } from '../../interfaces'

interface GetAllFeaturesRequestAction {
    type: FeatureActionType.GET_ALL_FEATURES_REQUEST
}
interface GetAllFeaturesSuccessAction {
    type: FeatureActionType.GET_ALL_FEATURES_SUCCESS
    payload: IFeatureList
}
interface GetAllFeaturesFailAction {
    type: FeatureActionType.GET_ALL_FEATURES_FAIL
    payload: string
}

interface GetFeatureRequestAction {
    type: FeatureActionType.GET_FEATURE_REQUEST
}
interface GetFeatureSuccessAction {
    type: FeatureActionType.GET_FEATURE_SUCCESS
    payload: IFeature
}
interface GetFeatureFailAction {
    type: FeatureActionType.GET_FEATURE_FAIL
    payload: string
}

interface CreateFeatureRequestAction {
    type: FeatureActionType.CREATE_FEATURE_REQUEST
}
interface CreateFeatureSuccessAction {
    type: FeatureActionType.CREATE_FEATURE_SUCCESS
    payload: IFeature
}
interface CreateFeatureFailAction {
    type: FeatureActionType.CREATE_FEATURE_FAIL
    payload: string
}

interface UpdateFeatureRequestAction {
    type: FeatureActionType.UPDATE_FEATURE_REQUEST
}
interface UpdateFeatureSuccessAction {
    type: FeatureActionType.UPDATE_FEATURE_SUCCESS
    payload: IFeature
}
interface UpdateFeatureFailAction {
    type: FeatureActionType.UPDATE_FEATURE_FAIL
    payload: string
}

export type FeatureAction =
    | GetAllFeaturesRequestAction
    | GetAllFeaturesSuccessAction
    | GetAllFeaturesFailAction
    | GetFeatureRequestAction
    | GetFeatureSuccessAction
    | GetFeatureFailAction
    | CreateFeatureRequestAction
    | CreateFeatureSuccessAction
    | CreateFeatureFailAction
    | UpdateFeatureRequestAction
    | UpdateFeatureSuccessAction
    | UpdateFeatureFailAction
