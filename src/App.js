import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import './style.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };


  const handleDeleteTask = (i) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(i, 1);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (i) => {
    const updatedTasks = [...tasks];
    console.log(updatedTasks);
    updatedTasks[i].completed = !updatedTasks[i].completed;
    setTasks(updatedTasks);
  };

  const handleFilter = (completed) => {
    console.log("tasks=" +[...tasks]);
    const filteredTasks = tasks.filter((task) => task.completed === completed);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <h1>TaskList By Bahaeddine</h1>
      <AddTask onAdd={handleAddTask} />
      <div className="space"></div>
      <button onClick={() => handleFilter(true)}> ** Afficher les tâches complétées **</button>
      <button onClick={() => handleFilter(false)}>** Afficher les tâches non complétées **</button>
      <button onClick={() => setTasks([])}>** Effacer toute la liste **</button>
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
    </div>
  );
}

export default App;