import React from "react";
import Tasks from "./Tasks";
import TaskDetail from "./TaskDetail";
import NewTask from "./NewTask";

export default () => {
    return (
        <div>
            <NewTask/>
            <br/><br/>
            <Tasks/>
            <br/><br/>
            <TaskDetail/>
        </div>
    );
}