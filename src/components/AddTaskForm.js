import React, { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim() === '') {
      window.alert('Debe completar el campo');
      return;
    }

    const newTask = { id: Date.now(), name: taskName };
    onAddTask(newTask);
    setTaskName('');
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Escriba su tarea" 
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
    </div>
  );
}

export default AddTaskForm;
