import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import jumpRecordsReducer from './jumpRecords'
import usersReducer from './allUsers'
import dropzoneReducer from './dropzones'

const reducer = combineReducers({ 
  auth,
  jumpRecords: jumpRecordsReducer,
  users: usersReducer,
  dropzones: dropzoneReducer 
 })
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
