import React from "react";
import {connect} from "react-redux";

class TaskDetail extends React.Component {
    renderForm() {
        if (!this.props.task) {
            return null;
        }

        return (
            // 編集ボタンを押したら編集フォームに切り替わるようにする。（stateを使うか）
          <div>
              <div>ID: {this.props.task.id}</div>
              <div>Title: {this.props.task.title}</div>
              <div>Body: {this.props.task.body}</div>
          </div>
        );
    }

    render() {
        return this.renderForm();
    }
}

const mapStateToProps = state => {
    return {task: state.task};
}

export default connect(mapStateToProps)(TaskDetail);