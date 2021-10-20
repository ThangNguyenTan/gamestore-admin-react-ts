import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { PublisherActionType } from '../action-types'
import { PublisherAction } from '../actions'
import {
    mainPublishersURL,
    singlePublisherURL,
    getErrorMessageFromResponse,
} from '../../utils'
import { IPublisher, IPublisherList } from '../../interfaces'

export const findPublishers = () => {
    return async (dispatch: Dispatch<PublisherAction>): Promise<void> => {
        dispatch({
            type: PublisherActionType.GET_ALL_PUBLISHERS_REQUEST,
        })

        try {
            const res: AxiosResponse<IPublisherList> = await axios.get(
                `${mainPublishersURL()}`
            )
            dispatch({
                type: PublisherActionType.GET_ALL_PUBLISHERS_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: PublisherActionType.GET_ALL_PUBLISHERS_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const getPublisher = (id: string | number) => {
    return async (dispatch: Dispatch<PublisherAction>): Promise<void> => {
        dispatch({
            type: PublisherActionType.GET_PUBLISHER_REQUEST,
        })

        try {
            const res: AxiosResponse<IPublisher> = await axios.get(
                `${singlePublisherURL(id)}`
            )
            dispatch({
                type: PublisherActionType.GET_PUBLISHER_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: PublisherActionType.GET_PUBLISHER_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const createPublisher = (publisherName: string) => {
    return async (dispatch: Dispatch<PublisherAction>): Promise<void> => {
        dispatch({
            type: PublisherActionType.CREATE_PUBLISHER_REQUEST,
        })

        try {
            const res: AxiosResponse<IPublisher> = await axios.post(
                `${mainPublishersURL()}`,
                {
                    publisherName,
                }
            )
            dispatch({
                type: PublisherActionType.CREATE_PUBLISHER_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: PublisherActionType.CREATE_PUBLISHER_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const updatePublisher = (modifiedPublisher: IPublisher) => {
    return async (dispatch: Dispatch<PublisherAction>): Promise<void> => {
        dispatch({
            type: PublisherActionType.UPDATE_PUBLISHER_REQUEST,
        })

        try {
            const res: AxiosResponse<IPublisher> = await axios.put(
                `${singlePublisherURL(modifiedPublisher.id!)}`,
                modifiedPublisher
            )
            dispatch({
                type: PublisherActionType.UPDATE_PUBLISHER_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: PublisherActionType.UPDATE_PUBLISHER_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}
