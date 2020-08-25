import React from "react";
import {connect} from "react-redux";
import {selectTask} from "../actions";

class Task extends React.Component {
    render() {
        return (
            <div>
                <span>id: {this.props.task.id}  </span>
                <span onClick={() => this.props.selectTask(this.props.task)}>body: {this.props.task.body}  </span>
                <span>title: {this.props.task.title}</span>
            </div>
        );
    }
}

export default connect(null, {selectTask})(Task);