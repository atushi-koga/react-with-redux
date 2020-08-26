import React from "react";
import {connect} from "react-redux";
import {createTask} from "../actions";

class NewTask extends React.Component {
    state = {
        title: '',
        body: ''
    }

    render() {
        return (
            <div>
                <div>New Task</div>
                <div>
                    <input
                        onChange={e => this.setState({title: e.target.value})}
                        placeholder="title"
                    />
                </div>
                <br/>
                <div>
                    <textarea
                        onChange={e => this.setState({body: e.target.value})}
                        placeholder="body"
                    />
                </div>
                <div>
                    <button
                        onClick={() => this.props.createTask(this.state.title, this.state.body)}
                    >
                        登録
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(null, {createTask})(NewTask);