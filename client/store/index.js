import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import jumpRecordsReducer from './jumpRecords';
import usersReducer from './allUsers';
import dropzonesReducer from './dropzones';
import loadsReducer from './loads';

const reducer = combineReducers({
  auth,
  jumpRecords: jumpRecordsReducer,
  users: usersReducer,
  dropzones: dropzonesReducer,
  loads: loadsReducer,
  // singleUser: singleUserReducer,
  // singleDropzone: singleDropzoneReducer
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
