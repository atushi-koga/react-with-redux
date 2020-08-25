import axios from 'axios';

export default axios.create({
    baseURL: 'https://udemy-utils.herokuapp.com/api/v1'
})