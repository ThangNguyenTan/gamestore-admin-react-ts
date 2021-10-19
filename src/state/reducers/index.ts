import { combineReducers } from 'redux'
import bankReducer from './bankReducer'
import findTodosReducer from './findTodosReducer'
import createTodoReducer from './createTodoReducer'

const reducers = combineReducers({
    bankReducer,
    findTodosReducer,
    createTodoReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
