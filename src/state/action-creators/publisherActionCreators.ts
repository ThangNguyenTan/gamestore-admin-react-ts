import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { PublisherActionType } from '../action-types'
import { PublisherAction } from '../actions'
import {
    mainPublishersURL,
    singlePublisherURL,
    getErrorMessageFromResponse,
    createAuthorizedRequestHeader,
} from '../../utils'
import { IPublisher, IPublisherList } from '../../interfaces'
import { RootState } from '../reducers'

export const findPublishers = () => {
    return async (
        dispatch: Dispatch<PublisherAction>,
        getState: () => RootState
    ): Promise<void> => {
        dispatch({
            type: PublisherActionType.GET_ALL_PUBLISHERS_REQUEST,
        })

        try {
            const { authReducer } = getState()
            const { currentUser } = authReducer

            const res: AxiosResponse<IPublisherList> = await axios.get(
                `${mainPublishersURL()}`,
                {
                    headers: {
                        Authorization: createAuthorizedRequestHeader(
                            currentUser
                        ),
                    },
                }
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
    return async (
        dispatch: Dispatch<PublisherAction>,
        getState: () => RootState
    ): Promise<void> => {
        dispatch({
            type: PublisherActionType.GET_PUBLISHER_REQUEST,
        })

        try {
            const { authReducer } = getState()
            const { currentUser } = authReducer

            const res: AxiosResponse<IPublisher> = await axios.get(
                `${singlePublisherURL(id)}`,
                {
                    headers: {
                        Authorization: createAuthorizedRequestHeader(
                            currentUser
                        ),
                    },
                }
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
    return async (
        dispatch: Dispatch<PublisherAction>,
        getState: () => RootState
    ): Promise<void> => {
        dispatch({
            type: PublisherActionType.CREATE_PUBLISHER_REQUEST,
        })

        try {
            const { authReducer } = getState()
            const { currentUser } = authReducer

            const res: AxiosResponse<IPublisher> = await axios.post(
                `${mainPublishersURL()}`,
                {
                    publisherName,
                },
                {
                    headers: {
                        Authorization: createAuthorizedRequestHeader(
                            currentUser
                        ),
                    },
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
    return async (
        dispatch: Dispatch<PublisherAction>,
        getState: () => RootState
    ): Promise<void> => {
        dispatch({
            type: PublisherActionType.UPDATE_PUBLISHER_REQUEST,
        })

        try {
            const { authReducer } = getState()
            const { currentUser } = authReducer

            const res: AxiosResponse<IPublisher> = await axios.put(
                `${singlePublisherURL(modifiedPublisher.id!)}`,
                modifiedPublisher,
                {
                    headers: {
                        Authorization: createAuthorizedRequestHeader(
                            currentUser
                        ),
                    },
                }
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
