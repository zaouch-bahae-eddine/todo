const connection = require('../../Connexion');
const promiseConnection = connection.promise();
const todoFormat = require('../../model/format/Todo');
const {findAll, findById} = require('../Queries');


const getAllTodo = async () => {
    const result = await findAll(todoFormat);
    return result;
}

const getTodoById = async (id) => {
    const result = await findById(id, todoFormat)
    return result;
}

module.exports.getAllTodo = getAllTodo;
module.exports.getTodoById = getTodoById;