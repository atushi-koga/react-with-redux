export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TASKS':
            return action.payload.sort((a, b) => a.id - b.id);
        case 'CREATE_TASK':
            return [...state, action.payload]
                .sort((a, b) => a.id - b.id);
        case 'EDIT_TASK':
            return [...state.filter(task => task.id !== action.payload.id), action.payload]
                .sort((a, b) => a.id - b.id);
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload.taskId)
                .sort((a, b) => a.id - b.id);
        default:
            return state;
    }
}