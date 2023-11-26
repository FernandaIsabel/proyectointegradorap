import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

 
  const toggleTaskStatus = (taskId, status) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };



  useEffect(() => {
    
    const updatedTasks = tasks.map((task) => {
      if (task.status === 'Completada') {
        return { ...task, textColor: 'green' };
      } else if (task.status === 'En Proceso') {
        return { ...task, textColor: 'yellow' };
      } else {
        return { ...task, textColor: 'black' };
      }
    });
    setTasks(updatedTasks);
  }, [tasks]);

 
  return (
    <div>
    <div className="container">
      <h1>MI APP DE TAREAS</h1>
      
      <AddTaskForm onAddTask={addTask} />
      <h2><i>ListaDO</i></h2>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTaskStatus={toggleTaskStatus} />
    
     
    </div>
    <footer>
      <p>Coopyright &copy; 2023 | Todos los derechos reservados</p>
    </footer>
    </div>
  );
}

export default App;



