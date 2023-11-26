
import React, { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    const newTask = { id: Date.now(), name: taskName };
    onAddTask(newTask);
    setTaskName('');
  };

  return (
    <div>
      <input
        required
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
    </div>
  );
}

export default AddTaskForm;
