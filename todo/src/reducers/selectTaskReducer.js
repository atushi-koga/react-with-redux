export default (state = null, action) => {
    switch (action.type) {
        case 'SELECT_TASK':
            return action.payload;
        default:
            return state;
    }
}