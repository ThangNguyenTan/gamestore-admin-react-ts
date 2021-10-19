import { IGenre } from '../../interfaces'
import { GenreActionType } from '../action-types'
import { GenreAction } from '../actions'

type IState = {
    loading: boolean
    genre: IGenre | null
    error: string | null
}

const initialState = {
    loading: false,
    genre: null,
    error: null,
}

const createGenreReducer = (
    state: IState = initialState,
    action: GenreAction
): IState => {
    switch (action.type) {
        case GenreActionType.CREATE_GENRE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case GenreActionType.CREATE_GENRE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                genre: action.payload,
            }
        case GenreActionType.CREATE_GENRE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default createGenreReducer
