import {combineReducers} from 'redux';
import UsersReducer from './users-reducer.js' ; 
import ActiveUserReducer from './active-user-reducer.js' ; 

const allReducers = combineReducers({
  users: UsersReducer, 
  activeUser: ActiveUserReducer
});

export default allReducers; 
