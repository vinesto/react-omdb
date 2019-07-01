import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import moviesReducer from './reducers/movies'
import modalReducer from './reducers/modal'

const rootReducer = combineReducers({
    movies: moviesReducer,
    modal: modalReducer
})

const store = createStore(
    rootReducer, applyMiddleware(thunk)
)

export default store
