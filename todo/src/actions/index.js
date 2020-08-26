import taskAPI from "../apis/taskAPI";

export const fetchTasks = () => async dispatch => {
    const response = await taskAPI.get('/events?token=token123');

    dispatch({type: 'FETCH_TASKS', payload: response.data});
}

export const selectTask = task => {
    return {type: 'SELECT_TASK', payload: task}
}

export const createTask = (title, body) => async dispatch => {
    const newTask = await taskAPI.post('/events/?token=token123', {title, body});

    dispatch({type: 'CREATE_TASK', payload: newTask.data});
}