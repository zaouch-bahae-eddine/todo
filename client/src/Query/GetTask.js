import { gql } from "@apollo/client";

const GET_TASK = gql`
    query{
        tasks: getTodoList{
            id
            title
            categorie
            detail
            dateStart
            dateEnd
        }
    }
`;
export default GET_TASK;