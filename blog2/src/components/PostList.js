import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

// 関数コンポーネントに書き換える
class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <div>Post List</div>
    }
}

export default connect(
    null,
    {fetchPosts}
)(PostList);