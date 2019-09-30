import { combineReducers } from 'redux';
import User from './User';
import Data from './Data';

const rootReducer = combineReducers({
  User,
  Data
 })
 
 export default rootReducer