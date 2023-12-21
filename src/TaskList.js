// TaskList.js

import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggle }) => {
    if((tasks.length >0)){
        return (
            <ul>
            {tasks.map((task, index) => (
                <Task
                key={index}
                task={task}
                onDelete={() => onDelete(index)}
                onToggle={() => onToggle(index)}
                />
            ))}
            </ul>
        );
    }else{
        return (
            <h3>No tasks Available !!!</h3>
        );
    }
};

export default TaskList;