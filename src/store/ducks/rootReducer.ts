import { combineReducers } from 'redux';
import user from './auth';
import system from './system';

export default combineReducers({
    user,
    system,
});
