import { combineReducers } from 'redux'
import bankReducer from './bankReducer'
import findTodosReducer from './findTodosReducer'
import createTodoReducer from './createTodoReducer'
import findGenresReducer from './findGenresReducer'
import createGenreReducer from './createGenreReducer'
import getGenreReducer from './getGenreReducer'
import updateGenreReducer from './updateGenreReducer'
import findFeaturesReducer from './findFeaturesReducer'
import createFeatureReducer from './createFeatureReducer'
import getFeatureReducer from './getFeatureReducer'
import updateFeatureReducer from './updateFeatureReducer'
import findDevelopersReducer from './findDevelopersReducer'
import createDeveloperReducer from './createDeveloperReducer'
import getDeveloperReducer from './getDeveloperReducer'
import updateDeveloperReducer from './updateDeveloperReducer'

const reducers = combineReducers({
    bankReducer,
    findTodosReducer,
    createTodoReducer,
    findGenresReducer,
    createGenreReducer,
    getGenreReducer,
    updateGenreReducer,
    findFeaturesReducer,
    createFeatureReducer,
    getFeatureReducer,
    updateFeatureReducer,
    findDevelopersReducer,
    createDeveloperReducer,
    getDeveloperReducer,
    updateDeveloperReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
