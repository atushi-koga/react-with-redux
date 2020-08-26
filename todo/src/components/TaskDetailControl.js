import React from "react";
import {connect} from "react-redux";
import {deleteTask} from "../actions";
import TaskDetail from "./TaskDetail";

class TaskDetailControl extends React.Component {
    renderForm() {
        if (!this.props.task) {
            return null;
        }

        return <TaskDetail task={this.props.task}/>;
    }

    render() {
        return this.renderForm();
    }
}

const mapStateToProps = state => {
    return {task: state.task};
}

export default connect(mapStateToProps, {deleteTask})(TaskDetailControl);