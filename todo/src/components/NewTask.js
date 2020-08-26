import React from "react";

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
                <div><button>登録</button></div>
            </div>
        );
    }
}

export default NewTask;