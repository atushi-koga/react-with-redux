import React from "react";
import {connect} from "react-redux";
import {fetchTasks} from "../actions";

class Tasks extends React.Component {
    componentDidMount() {
        this.props.fetchTasks();
    }

    renderTasks() {
        return this.props.tasks.map(task => {
            return (
                <div key={task.id}>
                    <div>{task.id}</div>
                    <div>{task.body}</div>
                    <div>{task.title}</div>
                </div>
            );
        })
    }

    render() {
        return <div>{this.renderTasks()}</div>;
    }
}

const mapStateToProps = state => {
    return {tasks: state.tasks}
}

export default connect(mapStateToProps, {fetchTasks})(Tasks);