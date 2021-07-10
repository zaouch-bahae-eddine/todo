import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSetting, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { TasksGroupeSettingStyle } from '../TaskShared';
import HiddenCover from '../HiddenCover/HiddenCover';
const TaskItem = styled.div`
    width: 280px;
    border-radius: 10px;
    background-color: white;
    margin-bottom: 11px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    & > div{
        padding: 12px;
        & > span{
            font-size: 0.7em;
            color: white;
            background: #ff32325e;
            padding: 3px;
            border-radius: 3px;
        }
        & > p {
            padding: 5px;
        }
    }
    h2{
        margin-bottom: 0;
    }

`;
const TaskHeader = styled.div`
    display: flex;
    padding: 0 !important;
    justify-content: space-between;
    align-items: center;
    svg{
        font-size: 16pt;
        color: #32d0ff;
        &:hover{
            cursor: pointer;
        }
    }
    & > div {
        position: relative;
    }
`;
const CategorieStyle = styled.div`
    display: inline-block;
    padding: 7px !important;
    font-weight: bold;
    font-size: 0.9em;
    color: white;
    background-color: #32d0ff;
    border-radius: 5px;
`;
const DetailStyle = styled.div`
    width: 100%;
    p{
        font-family: 'Roboto';
        padding: 0 7px;
        margin-bottom: 0;
    }
`;
function Task() {
    const [displaySetting, setDisplaySetting] = useState(false);
    const toggelSetting = () => {
        setDisplaySetting((prev) => !prev);
    }
    return (
        <TaskItem>
            <div>
                <TaskHeader>
                    <CategorieStyle>Categorie</CategorieStyle>
                    <div onClick={() => toggelSetting()}>
                        <AiOutlineSetting />
                        <TasksGroupeSettingStyle color="#32d0ff" size="110px" visible={displaySetting}>
                            <li><AiOutlineEdit /> <span>Edit</span></li>
                            <li><AiOutlineDelete /> <span>Delete</span></li>
                        </TasksGroupeSettingStyle>
                    </div>
                </TaskHeader>
                <h2>Title Task</h2>
                <span>2020-01-21 23:59:59</span>
                <DetailStyle>
                    <p> Details Details Details Details Details Details Details Details</p>
                </DetailStyle>
            </div>
            <HiddenCover visible={displaySetting} toggelSetting={toggelSetting}/>
        </TaskItem>
    )
}

export default Task
