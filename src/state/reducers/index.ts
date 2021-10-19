import { combineReducers } from 'redux'
import bankReducer from './bankReducer'
import findTodosReducer from './findTodosReducer'
import createTodoReducer from './createTodoReducer'
import findGenresReducer from './findGenresReducer'
import createGenreReducer from './createGenreReducer'
import getGenreReducer from './getGenreReducer'
import updateGenreReducer from './updateGenreReducer'

const reducers = combineReducers({
    bankReducer,
    findTodosReducer,
    createTodoReducer,
    findGenresReducer,
    createGenreReducer,
    getGenreReducer,
    updateGenreReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
