import {combineReducers} from "redux";

const postList = (list = [], action) => {
    if (action.type === 'FETCH_POST') {
        return action.payload
    }

    return list;
}

export default combineReducers({
    postList
});