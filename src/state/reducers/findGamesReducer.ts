import { IFindGameList } from '../../interfaces'
import { GameActionType } from '../action-types'
import { GameAction } from '../actions'

type IState = {
    loading: boolean
    games: IFindGameList | []
    error: string | null
}

const initialState = {
    loading: false,
    games: [],
    error: null,
}

const findGamesReducer = (
    state: IState = initialState,
    action: GameAction
): IState => {
    switch (action.type) {
        case GameActionType.GET_ALL_GAMES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case GameActionType.GET_ALL_GAMES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                games: action.payload,
            }
        case GameActionType.GET_ALL_GAMES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default findGamesReducer
