import React from "react";
import {connect} from "react-redux";
import {fetchTasks} from "../actions";
import Task from "./Task";

class Tasks extends React.Component {
    componentDidMount() {
        this.props.fetchTasks();
    }

    renderTasks() {
        return this.props.tasks.map(task => {
            return (
                <Task key={task.id} task={task}/>
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