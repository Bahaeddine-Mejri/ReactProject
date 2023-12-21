import React, { useState } from 'react';

const AddTask = (props) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    props.onAdd({ text: task, completed: false });
    setTask('');
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
};

export default AddTask;