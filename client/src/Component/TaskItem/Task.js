import React from 'react';
import styled from 'styled-components';
const TaskItem = styled.div`
    max-width: 280px;
    min-height: 170px;
    border-radius: 10px;
    background-color: white;
    border-top: #0000ffa6 4px solid;
    margin-bottom: 11px;
`;
function Task() {
    return (
        <TaskItem>
            <span>Categorie</span>
            <h2>Title Task</h2>
            <p> Details Details Details Details Details Details Details Details</p>
        </TaskItem>
    )
}

export default Task
