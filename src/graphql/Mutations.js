import {gql} from "@apollo/client";

export const CREATE_TASK_MUTATION = gql`
        
    mutation createTask(
        $text: String! 
        $day: String! 
        $reminder: Boolean!
        ) {
        createTask(
            text: $text
            day: $day
            reminder: $reminder
            ) {
            id    
        }    
    }
`;


export const DELETE_TASK_MUTATION = gql`
    
    mutation deleteTask(
        $id: Int!
        ) {
        deleteTask (
            id: $id
            ) {
            id
        }
    }
`;