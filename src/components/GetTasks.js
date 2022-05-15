import React, {useEffect, useState} from 'react';
import {useMutation, useQuery} from "@apollo/client";
import {LOAD_TASKS} from "../graphql/Queries";
import Task from "./task";
import {DELETE_TASK_MUTATION} from "../graphql/Mutations";

function GetTasks(props) {
    /**
     *  all the data we want to get from Queries.js
     */
    const {error, loading, data} = useQuery(LOAD_TASKS);

    const [tasks, setTasks ] = useState([]);

    const [deleteTask] = useMutation(DELETE_TASK_MUTATION);

    useEffect(() => {
        if(data) {
            console.log(data.getAllTasks)
            setTasks(data.getAllTasks)
        }

    }, [data]);




    return (
        <div>
            {data && data.getAllTasks.map((task) => {
                return (
                    <div>
                        <Task key={task.id} task={task}/>
                    </div>
                );
            })}
        </div>
    );
}

export default GetTasks;