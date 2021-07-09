const connection = require('../../Connexion');
const promiseConnection = connection.promise();
const todoFormat = require('../../model/format/Todo');
const {findAll, findById, setById, add, deleteById} = require('../Queries');


const getAllTodo = async () => {
    const result = await findAll(todoFormat);
    return result;
}

const getTodoById = async (id) => {
    const result = await findById(id, todoFormat)
    return result;
}

const addTodo = async (data) => {
    const result = await add(data, todoFormat);
    return result;
}

const setTodoById = async (id, data) => {
    const result = await setById(id, data, todoFormat);
    return result;
}

const deleteTodoById = async (id) => {
    const result = await deleteById(id, todoFormat);
    return result;
}
module.exports.getAllTodo = getAllTodo;
module.exports.getTodoById = getTodoById;
module.exports.addTodo = addTodo;
module.exports.setTodoById = setTodoById;
module.exports.deleteTodoById = deleteTodoById;