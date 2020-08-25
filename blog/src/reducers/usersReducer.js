export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            const found = state.find(elem => elem.id === action.payload.id);
            return found ? state : [...state, action.payload];
        default:
            return state;
    }
}