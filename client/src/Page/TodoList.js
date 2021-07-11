import React, { Fragment, useState } from 'react'
import Task from '../Component/Task/TaskItem/Task'
import TaskContainer from '../Component/Task/TaskContainer/TaskContainer';
import Modal from '../Component/Modal/Modal';
import AddTaskForm from '../Component/Form/AddTaskForm';
import { useQuery } from '@apollo/client';
import GET_TASK from '../Query/GetTask';

function TodoList() {
    const [displayAddTaskModal, setDisplayAddTaskModal] = useState(false);
    const [displaySetTaskModal, setDisplaySetTaskModal] = useState(false);
    const [formInput, setFormInput] = useState({
        title: "",
        detail: "",
        categorie: "",
        dateStart: "",
        dateEnd: ""
    });
    const { loading, error, data } = useQuery(GET_TASK);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const toggelAddTaskModal = () => {
        setDisplayAddTaskModal(prev => !prev);
        resetForm();
    }
    const toggelSetTaskModal = (data) => {
        setDisplaySetTaskModal(prev => !prev);
        if(data !== undefined){
            setFormInput({
                title: data.title,
                detail: data.detail,
                categorie: data.categorie,
                dateStart: data.dateStart,
                dateEnd: data.dateEnd
            });
        } else {
            resetForm();
        }

    }

    const resetForm = () => {
        setFormInput({
            title: "",
            detail: "",
            categorie: "",
            dateStart: "",
            dateEnd: "",
        });
    }
    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        const formInputEdit = { ...formInput };
        formInputEdit[name] = value;
        setFormInput(formInputEdit);
    }
    return (
        <Fragment>
            <Modal title="Add task" visible={displayAddTaskModal} toggelAddTAskModal={toggelAddTaskModal}>
                <AddTaskForm
                    formInput={formInput}
                    handleInputChange={handleInputChange}
                    resetForm={resetForm} />
            </Modal>
            <Modal title="Edit task" visible={displaySetTaskModal} toggelAddTAskModal={toggelSetTaskModal}>
                <AddTaskForm
                    formInput={formInput}
                    handleInputChange={handleInputChange}
                    resetForm={resetForm} />
            </Modal>
            <TaskContainer toggelAddTAskModal={toggelAddTaskModal}>
                {
                    data.tasks.map(taskData => <Task data={taskData} toggelSetTaskModal={toggelSetTaskModal}/>)
                }
            </TaskContainer>
        </Fragment>
    )
}

export default TodoList
