import React from "react";
import Tasks from "./Tasks";
import TaskDetail from "./TaskDetail";

export default () => {
    return (
        <div>
            <Tasks/>
            <br/><br/>
            <TaskDetail/>
        </div>
    );
}