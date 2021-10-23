import { IGame } from '../../interfaces'
import { GameActionType } from '../action-types'
import { GameAction } from '../actions'

type IState = {
    loading: boolean
    game: IGame | null
    error: string | null
}

const initialState = {
    loading: false,
    game: null,
    error: null,
}

const updateGameReducer = (
    state: IState = initialState,
    action: GameAction
): IState => {
    switch (action.type) {
        case GameActionType.UPDATE_GAME_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case GameActionType.UPDATE_GAME_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                game: action.payload,
            }
        case GameActionType.UPDATE_GAME_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default updateGameReducer
