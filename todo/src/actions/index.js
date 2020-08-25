import taskAPI from "../apis/taskAPI";

export const fetchTasks = () => async dispatch => {
    const response = await taskAPI.get('/events?token=token123');

    dispatch({type: 'FETCH_TASKS', payload: response.data});
}