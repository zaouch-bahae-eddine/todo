const { getAllTodo, getTodoById } = require('../db/physique/todo/TodoQueries');
const Resolver = {
    Query: {
        getTodoList: async () =>{
            return getAllTodo();
        },
        getTodoById: async (obj, args, context, info) => {
            return getTodoById(args.id);
        }
    }
}
module.exports = Resolver;