import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { DeveloperActionType } from '../action-types'
import { DeveloperAction } from '../actions'
import {
    mainDevelopersURL,
    singleDeveloperURL,
    getErrorMessageFromResponse,
} from '../../utils'
import { IDeveloper, IDeveloperList } from '../../interfaces'

export const findDevelopers = () => {
    return async (dispatch: Dispatch<DeveloperAction>): Promise<void> => {
        dispatch({
            type: DeveloperActionType.GET_ALL_DEVELOPERS_REQUEST,
        })

        try {
            const res: AxiosResponse<IDeveloperList> = await axios.get(
                `${mainDevelopersURL()}`
            )
            dispatch({
                type: DeveloperActionType.GET_ALL_DEVELOPERS_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: DeveloperActionType.GET_ALL_DEVELOPERS_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const getDeveloper = (id: string | number) => {
    return async (dispatch: Dispatch<DeveloperAction>): Promise<void> => {
        dispatch({
            type: DeveloperActionType.GET_DEVELOPER_REQUEST,
        })

        try {
            const res: AxiosResponse<IDeveloper> = await axios.get(
                `${singleDeveloperURL(id)}`
            )
            dispatch({
                type: DeveloperActionType.GET_DEVELOPER_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: DeveloperActionType.GET_DEVELOPER_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const createDeveloper = (developerName: string) => {
    return async (dispatch: Dispatch<DeveloperAction>): Promise<void> => {
        dispatch({
            type: DeveloperActionType.CREATE_DEVELOPER_REQUEST,
        })

        try {
            const res: AxiosResponse<IDeveloper> = await axios.post(
                `${mainDevelopersURL()}`,
                {
                    developerName,
                }
            )
            dispatch({
                type: DeveloperActionType.CREATE_DEVELOPER_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: DeveloperActionType.CREATE_DEVELOPER_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const updateDeveloper = (modifiedDeveloper: IDeveloper) => {
    return async (dispatch: Dispatch<DeveloperAction>): Promise<void> => {
        dispatch({
            type: DeveloperActionType.UPDATE_DEVELOPER_REQUEST,
        })

        try {
            const res: AxiosResponse<IDeveloper> = await axios.put(
                `${singleDeveloperURL(modifiedDeveloper.id!)}`,
                modifiedDeveloper
            )
            dispatch({
                type: DeveloperActionType.UPDATE_DEVELOPER_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: DeveloperActionType.UPDATE_DEVELOPER_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}
