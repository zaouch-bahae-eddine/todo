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
        id: "",
        title: "",
        detail: "",
        categorie: "",
        dateStart: "",
        dateEnd: ""
    });
    const { loading, error, data, refetch } = useQuery(GET_TASK);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const toggelAddTaskModal = () => {
        setDisplayAddTaskModal(prev => !prev);
        resetForm();
    }
    const toggelSetTaskModal = (data) => {
        setDisplaySetTaskModal(prev => !prev);
        if (data !== undefined) {
            setFormInput({
                id: data.id,
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
            id: "",
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
                    type="add"
                    formInput={formInput}
                    handleInputChange={handleInputChange}
                    resetForm={resetForm}
                    refetch={refetch}
                />
            </Modal>
            <Modal title="Edit task" visible={displaySetTaskModal} toggelAddTAskModal={toggelSetTaskModal}>
                <AddTaskForm
                    type="set"
                    formInput={formInput}
                    handleInputChange={handleInputChange}
                    resetForm={resetForm}
                    refetch={refetch}
                    setDisplaySetTaskModal={setDisplaySetTaskModal}
                    />
            </Modal>
            <TaskContainer toggelAddTAskModal={toggelAddTaskModal}>
                {
                    data.tasks.map(taskData => <Task 
                        key={taskData.id} 
                        data={taskData}
                         toggelSetTaskModal={toggelSetTaskModal}
                         refetch={refetch} />)
                }
            </TaskContainer>
        </Fragment>
    )
}

export default TodoList
