import React, { useState } from 'react'
import styled from 'styled-components';
import { AiOutlineSetting, AiOutlineEdit, AiOutlineDelete, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { TasksGroupeSettingStyle } from '../TaskShared';
import HiddenCover from '../../HiddenCover/HiddenCover';

const TaskContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 320px;
    background-color: #eceefd;
    border-radius: 10px;
    margin: 17px auto;
`;
const TasksGroupeHeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    background-color: #eceefd;
    svg {
        color: #4452a6;
        font-size: 16pt;
        &:hover{
            cursor: pointer;
        }
    }
    div{
        position: relative;
    }
`;

const AddTaskStyle = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 280px;
    height: 50px;
    margin-bottom: 17px;
    background-color: #d9defa;
    border-radius: 10px;
    color: #4452a6;
    svg{
        margin: 0 12px;
        font-size: 16pt;
    }
    &:hover{
        cursor: pointer;
    }
`;

function TaskContainer(props) {
    const [displaySetting, setDisplaySetting] = useState(false);
    const toggelSetting = () => {
        setDisplaySetting((prev) => !prev);
    }
    return (
        <TaskContainerStyle>
            <TasksGroupeHeaderStyle>
                <h2>{props.colomunTitle} In Progress</h2>
                <div onClick={() => toggelSetting()}>
                    <AiOutlineSetting />
                    <TasksGroupeSettingStyle color="#4452a6" visible={displaySetting}>
                        <li><AiOutlineEdit /> <span>Edit Name</span></li>
                        <li><AiOutlineDelete /> <span>Delete Groupe</span></li>
                    </TasksGroupeSettingStyle>
                </div>
            </TasksGroupeHeaderStyle>
            {props.children}
            <AddTaskStyle onClick={() => props.toggelAddTAskModal()}> <AiOutlineAppstoreAdd /> <span>Add a task</span></AddTaskStyle>
            <HiddenCover visible={displaySetting} clickAction={toggelSetting} />
        </TaskContainerStyle>
    )
}

export default TaskContainer
