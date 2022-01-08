import axios from 'axios';

export const fetchPosts = async() => {
    const response = await axios.create({baseURL: 'https://jsonplaceholder.typicode.com'}).get('/posts');
    return {
        type: 'FETCH_POSTS',
        payload: response
    }
}
