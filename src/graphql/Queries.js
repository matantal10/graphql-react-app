import {gql} from "@apollo/client";

export const LOAD_TASKS = gql`
    query {
        getAllTasks {
           id
           reminder
           day
           text   
        }
    }
`;