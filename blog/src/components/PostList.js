import React from "react";
import {fetchPosts} from "../actions";
import {connect} from "react-redux";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        if (!this.props.list.length) {
            return <div>No Post</div>;
        }

        return this.props.list.map(elem => {
            return (
                <div key={elem.title}>
                    <span>Post</span>
                    <div>{elem.title}</div>
                    <div>{elem.user}</div>
                </div>
            )
        })
    }

    render() {
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return {list: state.postList}
}

export default connect(mapStateToProps, {fetchPosts})(PostList);