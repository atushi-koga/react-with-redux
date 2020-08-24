export const fetchPosts = () => {
    return {
        type: 'FETCH_POST',
        payload: [
            {title: 'post1', user: 'user1'},
            {title: 'post2', user: 'user2'},
        ]
    };
}