import React from 'react';
import {FaTimes} from "react-icons/fa";
import {useMutation} from "@apollo/client";
import {DELETE_TASK_MUTATION} from "../graphql/Mutations";

const Task = ({task, onToggle}) => {


    const [deleteTask] = useMutation(DELETE_TASK_MUTATION);

    const onDelete = (id) => {
        deleteTask({
            variables: {
                id: id
            }
        }).catch(e => e);
    };


    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
             onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}
                <FaTimes style={{color: 'red', cursor: 'pointer'}}
                         onClick={() =>onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;