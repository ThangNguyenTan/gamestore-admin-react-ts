import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { FeatureActionType } from '../action-types'
import { FeatureAction } from '../actions'
import {
    mainFeaturesURL,
    singleFeatureURL,
    getErrorMessageFromResponse,
} from '../../utils'
import { IFeature, IFeatureList } from '../../interfaces'

export const findFeatures = () => {
    return async (dispatch: Dispatch<FeatureAction>): Promise<void> => {
        dispatch({
            type: FeatureActionType.GET_ALL_FEATURES_REQUEST,
        })

        try {
            const res: AxiosResponse<IFeatureList> = await axios.get(
                `${mainFeaturesURL()}`
            )
            dispatch({
                type: FeatureActionType.GET_ALL_FEATURES_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: FeatureActionType.GET_ALL_FEATURES_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const getFeature = (id: string | number) => {
    return async (dispatch: Dispatch<FeatureAction>): Promise<void> => {
        dispatch({
            type: FeatureActionType.GET_FEATURE_REQUEST,
        })

        try {
            const res: AxiosResponse<IFeature> = await axios.get(
                `${singleFeatureURL(id)}`
            )
            dispatch({
                type: FeatureActionType.GET_FEATURE_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: FeatureActionType.GET_FEATURE_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const createFeature = (featureName: string) => {
    return async (dispatch: Dispatch<FeatureAction>): Promise<void> => {
        dispatch({
            type: FeatureActionType.CREATE_FEATURE_REQUEST,
        })

        try {
            const res: AxiosResponse<IFeature> = await axios.post(
                `${mainFeaturesURL()}`,
                {
                    featureName,
                }
            )
            dispatch({
                type: FeatureActionType.CREATE_FEATURE_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: FeatureActionType.CREATE_FEATURE_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const updateFeature = (modifiedFeature: IFeature) => {
    return async (dispatch: Dispatch<FeatureAction>): Promise<void> => {
        dispatch({
            type: FeatureActionType.UPDATE_FEATURE_REQUEST,
        })

        try {
            const res: AxiosResponse<IFeature> = await axios.put(
                `${singleFeatureURL(modifiedFeature.id!)}`,
                modifiedFeature
            )
            dispatch({
                type: FeatureActionType.UPDATE_FEATURE_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: FeatureActionType.UPDATE_FEATURE_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}
