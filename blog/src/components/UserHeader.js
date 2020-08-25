import React from "react";
import {connect} from "react-redux";

class UserHeader extends React.Component {
    renderUser() {
        const {user} = this.props;

        return user ? <div className="header">{user.name}</div> : <div>Loading...</div>;
    }

    render() {
        return this.renderUser();
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps)(UserHeader);