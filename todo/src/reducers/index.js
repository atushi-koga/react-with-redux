import {combineReducers} from 'redux';
import fetchTasksReducer from "./fetchTasksReducer";

export default combineReducers({
    tasks: fetchTasksReducer
})