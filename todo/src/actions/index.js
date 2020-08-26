import taskAPI from "../apis/taskAPI";

const QUERY = '?token=token123';

export const fetchTasks = () => async dispatch => {
    const response = await taskAPI.get(`/events${QUERY}`);

    dispatch({type: 'FETCH_TASKS', payload: response.data});
}

export const selectTask = task => {
    return {type: 'SELECT_TASK', payload: task}
}

export const createTask = (title, body) => async dispatch => {
    const newTask = await taskAPI.post(`/events${QUERY}`, {title, body});

    dispatch({type: 'CREATE_TASK', payload: newTask.data});
}

export const editTask = task => async dispatch => {
    const edited = await taskAPI.put(`/events/${task.id}${QUERY}`, task);

    dispatch({type: 'EDIT_TASK', payload: edited.data});
}

export const deleteTask = id => async (dispatch) => {
    await taskAPI.delete(`/events/${id}${QUERY}`)

    dispatch({
        type: 'DELETE_TASK',
        payload: {
            taskId: id
        }
    })
}