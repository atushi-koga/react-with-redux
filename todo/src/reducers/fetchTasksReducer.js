export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TASKS':
            return action.payload;
        case 'CREATE_TASK':
            return [...state, action.payload];
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload.taskId);
        default:
            return state;
    }
}