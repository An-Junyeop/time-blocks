import { combineReducers } from 'redux';
import calendar from './calendar';

const rootReducer = combineReducers({ calendar: calendar });

export default rootReducer;
