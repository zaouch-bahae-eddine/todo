import { gql } from '@apollo/client';

const SET_TASK = gql`
  mutation set($todo: TodoInput!){
    setTodoById(todo: $todo){
      id
      title
      detail
      categorie
      dateStart
      dateEnd
    }    
  }
`;
export default SET_TASK;