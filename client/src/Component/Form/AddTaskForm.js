import { useMutation } from '@apollo/client';
import React, { Fragment } from 'react'
import styled from 'styled-components';
import ADD_TASK from '../../Query/AddTask';
const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px;
    label{
        color: #32d0ff;
        font-size: 0.9em;
        padding: 3px;
        font-style: italic;
    }
`;
const ModalButton = styled.button`
    width: 100%;
    height: 25px;
    background: #32d0ff;
    border: 0;
    color: white;
    border-radius: 5px;
    margin-top: 7px;
    &:hover{
        cursor: pointer;
        background-color: #1ec4f5;
    }
`;

function AddTaskForm(props) {
    const [addTask, { data }] = useMutation(ADD_TASK);
    const handleAddTack = (e) => {
        e.preventDefault();
        if (props.formInput.title.replace(/\s/g, '') !== '') {
            addTask({ variables: { todo: props.formInput } });
            props.resetFormAddTask();
        } else {
            alert('we can\'t add todo without titile');
        }
    }
    return (
        <Fragment>
            <InputGroup>
                <label htmlFor="categorie-modal-input">Categorie</label>
                <input type="text" value={props.formInput.categorie} id="categorie-modal-input" name="categorie"
                    onChange={(e) => props.handleInputChange(e)} />
            </InputGroup>
            <InputGroup>
                <label htmlFor="title-modal-input">Title</label>
                <input type="text" value={props.formInput.title} id="title-modal-input" name="title"
                    onChange={(e) => props.handleInputChange(e)} />
            </InputGroup>
            <InputGroup>
                <label htmlFor="date-modal-input">Date Start</label>
                <input type="text" value={props.formInput.dateStart} id="date-modal-input" name="dateStart"
                    onChange={(e) => props.handleInputChange(e)} />
            </InputGroup>
            <InputGroup>
                <label htmlFor="date-modal-input">Date End</label>
                <input type="text" value={props.formInput.dateEnd} id="date-modal-input" name="dateEnd"
                    onChange={(e) => props.handleInputChange(e)} />
            </InputGroup>
            <InputGroup>
                <label htmlFor="detail-modal-input">Details</label>
                <textarea type="text"
                    id="detail-modal-input"
                    name="detail"
                    value={props.formInput.detail}
                    onChange={(e) => props.handleInputChange(e)}>
                </textarea>
            </InputGroup>

            <ModalButton onClick={(e) => handleAddTack(e)}>Add</ModalButton>
        </Fragment>
    )
}

export default AddTaskForm
