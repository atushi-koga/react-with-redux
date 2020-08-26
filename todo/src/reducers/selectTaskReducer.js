export default (state = null, action) => {
    switch (action.type) {
        case 'SELECT_TASK':
            return action.payload;
        case 'DELETE_TASK':
            return state.id === action.payload.taskId ? null : state;
        default:
            return state;
    }
}