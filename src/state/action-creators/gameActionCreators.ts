import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { GameActionType } from '../action-types'
import { GameAction } from '../actions'
import {
    mainGamesURL,
    singleGameURL,
    getErrorMessageFromResponse,
} from '../../utils'
import {
    IFindGameItem,
    IFindGameList,
    ICreateGame,
    IUpdateGame,
} from '../../interfaces'

export const findGames = () => {
    return async (dispatch: Dispatch<GameAction>): Promise<void> => {
        dispatch({
            type: GameActionType.GET_ALL_GAMES_REQUEST,
        })

        try {
            const res: AxiosResponse<IFindGameList> = await axios.get(
                `${mainGamesURL()}`
            )
            dispatch({
                type: GameActionType.GET_ALL_GAMES_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: GameActionType.GET_ALL_GAMES_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const getGame = (id: string | number) => {
    return async (dispatch: Dispatch<GameAction>): Promise<void> => {
        dispatch({
            type: GameActionType.GET_GAME_REQUEST,
        })

        try {
            const res: AxiosResponse<IFindGameItem> = await axios.get(
                `${singleGameURL(id)}`
            )
            dispatch({
                type: GameActionType.GET_GAME_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: GameActionType.GET_GAME_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const createGame = (newGame: ICreateGame) => {
    return async (dispatch: Dispatch<GameAction>): Promise<void> => {
        dispatch({
            type: GameActionType.CREATE_GAME_REQUEST,
        })

        try {
            const res: AxiosResponse<IFindGameItem> = await axios.post(
                `${mainGamesURL()}`,
                newGame
            )
            dispatch({
                type: GameActionType.CREATE_GAME_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: GameActionType.CREATE_GAME_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}

export const updateGame = (modifiedGame: IUpdateGame) => {
    return async (dispatch: Dispatch<GameAction>): Promise<void> => {
        dispatch({
            type: GameActionType.UPDATE_GAME_REQUEST,
        })

        try {
            const res: AxiosResponse<IFindGameItem> = await axios.put(
                `${singleGameURL(modifiedGame.id!)}`,
                modifiedGame
            )
            dispatch({
                type: GameActionType.UPDATE_GAME_SUCCESS,
                payload: res.data,
            })
        } catch (error: any) {
            dispatch({
                type: GameActionType.UPDATE_GAME_FAIL,
                payload: getErrorMessageFromResponse(error),
            })
        }
    }
}
