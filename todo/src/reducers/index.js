import {combineReducers} from 'redux';
import fetchTasksReducer from "./fetchTasksReducer";
import selectTaskReducer from "./selectTaskReducer";

export default combineReducers({
    tasks: fetchTasksReducer,
    task: selectTaskReducer
})