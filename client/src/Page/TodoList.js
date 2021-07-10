import React, { Fragment } from 'react'
import Task from '../Component/Task/TaskItem/Task'
import TaskContainer from '../Component/Task/TaskContainer/TaskContainer';
function TodoList() {
    return (
        <Fragment>
            <TaskContainer>
                <Task />
                <Task />
                <Task />
                <Task />
            </TaskContainer>
        </Fragment>
    )
}

export default TodoList
