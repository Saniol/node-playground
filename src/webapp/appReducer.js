import { combineReducers } from 'redux';
import homeReducer from './home/homeReducer';

export default combineReducers({
    home: homeReducer,
});
