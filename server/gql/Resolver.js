const { getAllTodo, getTodoById, setTodoById, addTodo, deleteTodoById } = require('../db/physique/todo/TodoQueries');
const Resolver = {
    Query: {
        getTodoList: () =>{
            return getAllTodo();
        },
        getTodoById: (obj, args, context, info) => {
            return getTodoById(args.id);
        }
    },
    Mutation: {
        addTodo: (obj, args, context, info) => {
            return addTodo(args.todo);
        },
        setTodoById: (obj, args, context, info) => {
            return setTodoById(args.id, args.todo);
        },
        deleteTodoById: (obj, args, context, info) => {
            return deleteTodoById(args.id);
        }
    }
}
module.exports = Resolver;