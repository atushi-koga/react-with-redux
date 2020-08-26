import React from "react";
import Tasks from "./Tasks";
import NewTask from "./NewTask";
import TaskDetailControl from "./TaskDetailControl";

export default () => {
    return (
        <div>
            <NewTask/>
            <br/><br/>
            <Tasks/>
            <br/><br/>
            <TaskDetailControl/>
        </div>
    );
}