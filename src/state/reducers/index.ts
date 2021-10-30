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
import findPublishersReducer from './findPublishersReducer'
import createPublisherReducer from './createPublisherReducer'
import getPublisherReducer from './getPublisherReducer'
import updatePublisherReducer from './updatePublisherReducer'
import findUsersReducer from './findUsersReducer'
import findGamesReducer from './findGamesReducer'
import createGameReducer from './createGameReducer'
import getGameReducer from './getGameReducer'
import updateGameReducer from './updateGameReducer'
import authReducer from './authReducer'
import getAllOrdersReducer from './getAllOrdersReducer'

const reducers = combineReducers({
    authReducer,
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
    findPublishersReducer,
    createPublisherReducer,
    getPublisherReducer,
    updatePublisherReducer,
    findUsersReducer,
    findGamesReducer,
    createGameReducer,
    getGameReducer,
    updateGameReducer,
    getAllOrdersReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
