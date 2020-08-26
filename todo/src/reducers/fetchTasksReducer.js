export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TASKS':
            return action.payload;
        case 'CREATE_TASK':
            return [...state, action.payload];
        default:
            return state;
    }
}