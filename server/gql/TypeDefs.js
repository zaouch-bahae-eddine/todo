const { gql } = require('apollo-server');

const TypeDefs = gql`
    type Query {
        getTodoList: [Todo]
        getTodoById(id: ID!): Todo
    }

    type Mutation {
        addTodo(todo: TodoInput!) : Todo
        setTodoById(id: ID!, todo: TodoInput!): Todo
        deleteTodoById(id: ID!): Todo
    }

    type Todo {
        id: ID!
        title: String
        detail: String
        categorie:String
        dateStart: DateTime
        dateEnd: DateTime
    }

    input TodoInput {
        title: String
        detail: String
        categorie:String
        dateStart: DateTime
        dateEnd: DateTime
    }
    scalar DateTime
`;
module.exports = TypeDefs;