// Task.js

import React from 'react';

const Task = (props) => {
  return (
    <li className={props.task.completed ? 'completed' : ''}>
      {props.task.text}
      <button onClick={() => props.onDelete()}>Supprimer</button>
      <button onClick={() => props.onToggle()}>
        {props.task.completed ? 'Marquer comme non terminée' : 'Marquer comme terminée'}
      </button>
    </li>
  );
};

export default Task;