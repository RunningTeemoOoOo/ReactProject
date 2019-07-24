import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import navbarReducers from './Reducers/navbarReducer'
import thunkMiddleware from 'redux-thunk'
const reducers = combineReducers({
  isShow: navbarReducers
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store