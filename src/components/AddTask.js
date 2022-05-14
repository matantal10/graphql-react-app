import React, {useState} from 'react';
import {useMutation} from "@apollo/client";
import {CREAT_TASK_MUTATION} from "../graphql/Mutations";

const AddTask = ({onAdd}) => {
    const [text, setText] =  useState('');
    const [day, setDay] =  useState('');
    const [reminder, setReminder] =  useState(false);


    const [createTask, { error }] = useMutation(CREAT_TASK_MUTATION);

    const addTask = () => {
        createTask({
            variables: {
                text: text,
                day: day,
                reminder: reminder
            }
        })

        if(error) {
            console.log(error);
        }
    };



    //we don't call the onAdd directly
    const onSubmit = (e) => {

        e.preventDefault();


        if(!text) {
           alert('Please fill Task Name');
            return
        }

        onAdd({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task'
                        value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Date & Time</label>
                <input type='text' placeholder='Add Date & Time'
                        value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'
                       checked={reminder}
                        value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
            <button className='btn btn-block' onClick={addTask}>Create Task</button>
        </form>
    );
}

export default AddTask;