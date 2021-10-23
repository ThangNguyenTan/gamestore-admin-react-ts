import { IFindGameItem } from '../../interfaces'
import { GameActionType } from '../action-types'
import { GameAction } from '../actions'

type IState = {
    loading: boolean
    game: IFindGameItem | null
    error: string | null
}

const initialState = {
    loading: false,
    game: null,
    error: null,
}

const getGameReducer = (
    state: IState = initialState,
    action: GameAction
): IState => {
    switch (action.type) {
        case GameActionType.GET_GAME_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case GameActionType.GET_GAME_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                game: action.payload,
            }
        case GameActionType.GET_GAME_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default getGameReducer
