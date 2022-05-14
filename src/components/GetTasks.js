import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {LOAD_TASKS} from "../graphql/Queries";

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

    }, [data]);




    return (
        <div>
            {tasks.map((val) => {
                return <h3 key={val.id}>{val.text}</h3>
            })}
        </div>
    );
}

export default GetTasks;