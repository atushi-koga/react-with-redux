import React from "react";
import {connect} from "react-redux";
import {deleteTask, editTask} from "../actions";

class TaskDetail extends React.Component {
    state = {
        id: this.props.task.id,
        title: this.props.task.title,
        body: this.props.task.body,
    }

    renderForm() {
        return (
            <div>
                <div>ID: {this.state.id}</div>
                <div>
                    Title:
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={e => this.setState({title: e.target.value})}
                    />
                </div>
                <div>
                    Body:
                    <textarea
                        value={this.state.body}
                        onChange={e => this.setState({body: e.target.value})}
                    />
                </div>
                <button onClick={() => this.props.deleteTask(this.state.id)}>削除</button>
                <button onClick={() => this.props.editTask(this.state)}>保存</button>
            </div>
        );
    }

    render() {
        return this.renderForm();
    }
}

export default connect(null, {editTask, deleteTask})(TaskDetail);