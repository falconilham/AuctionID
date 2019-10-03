import { combineReducers } from 'redux';
import User from './User';
import Data from './Data';
import Lang from './Lang';

const rootReducer = combineReducers({
  User,
  Data,
  Lang
 })
 
 export default rootReducer