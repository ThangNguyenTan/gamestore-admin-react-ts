import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { GenreActionType } from '../action-types'
import { GenreAction } from '../actions'
import {
    mainGenresURL,
    singleGenreURL,
    getErrorMessageFromResponse,
} from '../../utils'
import { IGenre, IGenreList } from '../../interfaces'

export const findGenres = () => {
    return async (dispatch: Dispatch<GenreAction>): Promise<void> => {
        dispatch({
            type: GenreActionType.GET_ALL_GENRES_REQUEST,
        })

        try {
            const res: AxiosResponse<IGenreList> = await axios.get(
                `${mainGenresURL()}`
            )
            dispatch({
                type: GenreActionType.GET_ALL_GENRES_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: GenreActionType.GET_ALL_GENRES_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const getGenre = (id: string | number) => {
    return async (dispatch: Dispatch<GenreAction>): Promise<void> => {
        dispatch({
            type: GenreActionType.GET_GENRE_REQUEST,
        })

        try {
            const res: AxiosResponse<IGenre> = await axios.get(
                `${singleGenreURL(id)}`
            )
            dispatch({
                type: GenreActionType.GET_GENRE_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: GenreActionType.GET_GENRE_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const createGenre = (genreName: string) => {
    return async (dispatch: Dispatch<GenreAction>): Promise<void> => {
        dispatch({
            type: GenreActionType.CREATE_GENRE_REQUEST,
        })

        try {
            const res: AxiosResponse<IGenre> = await axios.post(
                `${mainGenresURL()}`,
                {
                    genreName,
                }
            )
            dispatch({
                type: GenreActionType.CREATE_GENRE_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: GenreActionType.CREATE_GENRE_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const updateGenre = (modifiedGenre: IGenre) => {
    return async (dispatch: Dispatch<GenreAction>): Promise<void> => {
        dispatch({
            type: GenreActionType.UPDATE_GENRE_REQUEST,
        })

        try {
            const res: AxiosResponse<IGenre> = await axios.put(
                `${singleGenreURL(modifiedGenre.id!)}`,
                modifiedGenre
            )
            dispatch({
                type: GenreActionType.UPDATE_GENRE_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: GenreActionType.UPDATE_GENRE_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}
