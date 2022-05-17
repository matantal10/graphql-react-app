import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {LOAD_TASKS} from "../graphql/Queries";
import Task from "./task";

function GetTasks(props) {
    /**
     *  all the data we want to get from Queries.js
     */
    const {error, loading, data} = useQuery(LOAD_TASKS);

    const [tasks, setTasks ] = useState([]);

    useEffect(() => {
        if(data) {
            console.log(data.getAllTasks)
            setTasks(data.getAllTasks)
        }

    }, [data, tasks]);

    return (
        <div>
            {tasks.map((task) => {
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