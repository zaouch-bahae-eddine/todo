import { gql } from '@apollo/client';

const ADD_TASK = gql`
    mutation add($todo: TodoInput!){
        addTodo(todo: $todo){
            id
            title
            detail
            categorie
            dateStart
            dateEnd
        }    
    }
`;
export default ADD_TASK;