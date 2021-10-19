import { GenreActionType } from '../action-types'
import { IGenre, IGenreList } from '../../interfaces'

interface GetAllGenresRequestAction {
    type: GenreActionType.GET_ALL_GENRES_REQUEST
}
interface GetAllGenresSuccessAction {
    type: GenreActionType.GET_ALL_GENRES_SUCCESS
    payload: IGenreList
}
interface GetAllGenresFailAction {
    type: GenreActionType.GET_ALL_GENRES_FAIL
    payload: string
}

interface GetGenreRequestAction {
    type: GenreActionType.GET_GENRE_REQUEST
}
interface GetGenreSuccessAction {
    type: GenreActionType.GET_GENRE_SUCCESS
    payload: IGenre
}
interface GetGenreFailAction {
    type: GenreActionType.GET_GENRE_FAIL
    payload: string
}

interface CreateGenreRequestAction {
    type: GenreActionType.CREATE_GENRE_REQUEST
}
interface CreateGenreSuccessAction {
    type: GenreActionType.CREATE_GENRE_SUCCESS
    payload: IGenre
}
interface CreateGenreFailAction {
    type: GenreActionType.CREATE_GENRE_FAIL
    payload: string
}

interface UpdateGenreRequestAction {
    type: GenreActionType.UPDATE_GENRE_REQUEST
}
interface UpdateGenreSuccessAction {
    type: GenreActionType.UPDATE_GENRE_SUCCESS
    payload: IGenre
}
interface UpdateGenreFailAction {
    type: GenreActionType.UPDATE_GENRE_FAIL
    payload: string
}

export type GenreAction =
    | GetAllGenresRequestAction
    | GetAllGenresSuccessAction
    | GetAllGenresFailAction
    | GetGenreRequestAction
    | GetGenreSuccessAction
    | GetGenreFailAction
    | CreateGenreRequestAction
    | CreateGenreSuccessAction
    | CreateGenreFailAction
    | UpdateGenreRequestAction
    | UpdateGenreSuccessAction
    | UpdateGenreFailAction
