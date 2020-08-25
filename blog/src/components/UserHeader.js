import React from "react";
import {connect} from "react-redux";
import {fetchUser} from "../actions";

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    renderUser() {
        const found = this.props.users.find(user => user.id === this.props.userId);

        return found ? <div className="header">{found.name}</div> : null;
    }

    render() {
        return this.renderUser();
    }
}

const mapStateToProps = state => {
    return {users: state.users}
}

export default connect(mapStateToProps, {fetchUser})(UserHeader);