import { gql } from "@apollo/client";

const DELETE_TASK = gql`
  mutation delete($id: ID!){
    deleteTodoById(id: $id){
      id
      title
      detail
      categorie
      dateStart
      dateEnd
    }
  }
`;
export default DELETE_TASK;