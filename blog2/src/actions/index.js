import axios from 'axios';

// long hand
// export const fetchPosts = () => {
//     return async function(dispatch, getState) {
//         const response = await axios.create({baseURL: 'https://jsonplaceholder.typicode.com'}).get('/posts');
//         return {
//             type: 'FETCH_POSTS',
//             payload: response
//         }
//     }
// }


// short hand
export const fetchPosts = () => async dispatch => {
    const response = await axios.create({baseURL: 'https://jsonplaceholder.typicode.com'}).get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
}

// dispatch を関数内部で呼ばずに、action object を返すのはありなのか？
// export const fetchPosts = () => {
//     return async(dispatch, getState) => {
//         const response = await axios.create({baseURL: 'https://jsonplaceholder.typicode.com'}).get('/posts');
//         return {
//             type: 'FETCH_POSTS',
//             payload: response
//         }
//     }
// }

export const fetchUser = id => async dispatch => {
    const response = await axios.create({baseURL: 'https://jsonplaceholder.typicode.com'}).get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data})
}