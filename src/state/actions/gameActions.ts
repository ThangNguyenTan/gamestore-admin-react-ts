import { GameActionType } from '../action-types'
import { IFindGameItem, IFindGameList } from '../../interfaces'

interface GetAllGamesRequestAction {
    type: GameActionType.GET_ALL_GAMES_REQUEST
}
interface GetAllGamesSuccessAction {
    type: GameActionType.GET_ALL_GAMES_SUCCESS
    payload: IFindGameList
}
interface GetAllGamesFailAction {
    type: GameActionType.GET_ALL_GAMES_FAIL
    payload: string
}

interface GetGameRequestAction {
    type: GameActionType.GET_GAME_REQUEST
}
interface GetGameSuccessAction {
    type: GameActionType.GET_GAME_SUCCESS
    payload: IFindGameItem
}
interface GetGameFailAction {
    type: GameActionType.GET_GAME_FAIL
    payload: string
}

interface CreateGameRequestAction {
    type: GameActionType.CREATE_GAME_REQUEST
}
interface CreateGameSuccessAction {
    type: GameActionType.CREATE_GAME_SUCCESS
    payload: IFindGameItem
}
interface CreateGameFailAction {
    type: GameActionType.CREATE_GAME_FAIL
    payload: string
}

interface UpdateGameRequestAction {
    type: GameActionType.UPDATE_GAME_REQUEST
}
interface UpdateGameSuccessAction {
    type: GameActionType.UPDATE_GAME_SUCCESS
    payload: IFindGameItem
}
interface UpdateGameFailAction {
    type: GameActionType.UPDATE_GAME_FAIL
    payload: string
}

export type GameAction =
    | GetAllGamesRequestAction
    | GetAllGamesSuccessAction
    | GetAllGamesFailAction
    | GetGameRequestAction
    | GetGameSuccessAction
    | GetGameFailAction
    | CreateGameRequestAction
    | CreateGameSuccessAction
    | CreateGameFailAction
    | UpdateGameRequestAction
    | UpdateGameSuccessAction
    | UpdateGameFailAction
