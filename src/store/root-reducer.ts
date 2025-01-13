import { combineReducers } from 'redux';
import inputReducer from './reducers/input.reducer';

const rootReducer = combineReducers({ inputReducer });

export default rootReducer;
