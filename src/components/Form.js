import React, {useState} from 'react';
import {useMutation} from "@apollo/client";
import {CREATE_TASK_MUTATION} from "../graphql/Mutations";

function Form(props) {

    const [text, setText] =  useState('');
    const [day, setDay] =  useState('');
    const [reminder, setReminder] =  useState(false);

    const [createTask, { error}] = useMutation(CREATE_TASK_MUTATION);

    const addTask = () => {
        createTask({
            variables: {
                text: text,
                day: day,
                reminder: reminder
            }
        });

        if(error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder="Name" onChange={(e) => {setText(e.target.value)}}/>
            </div>
            <div className='form-control'>
                <label>Date & Time</label>
                 <input type="text" placeholder="Day" onChange={(e) => {setDay(e.target.value)}}/>
            </div>
            <div className='form-control form-control-check'>
                 <label>Set Reminder</label>
                 <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => {setReminder(e.currentTarget.checked)}}/>
            </div>
            <button className='btn btn-block' onClick={addTask}>Create Task</button>
        </div>
    );
}

export default Form;