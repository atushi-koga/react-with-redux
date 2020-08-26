import React from "react";
import {connect} from "react-redux";
import {createTask} from "../actions";

class NewTask extends React.Component {
    render() {
        return (
            <div>
                <div>New Task</div>
                <div>
                    <input placeholder="title"/>
                </div>
                <br/>
                <div>
                    <textarea placeholder="body"/>
                </div>
                <div><button onClick={() => this.props.createTask('new title', 'new body')}>登録</button></div>
            </div>
        );
    }
}

export default connect(null, {createTask})(NewTask);