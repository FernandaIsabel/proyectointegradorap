import React , { useState, useEffect } from 'react';

function TaskItem({ task, onDeleteTask, onToggleTaskStatus }) {
    const [textColor, setTextColor] = useState('black');

    useEffect(() => {
      
        if (task.status === 'Completada') {
          setTextColor('green');
        } else if (task.status === 'En Proceso') {
          setTextColor('yellow');
        } else {
          setTextColor('black');
        }
      }, [task.status]);


  const handleDeleteClick = () => {
    const shouldDelete = window.confirm('¿Estás seguro de querer eliminar la tarea?');

    if (shouldDelete) {
      onDeleteTask(task.id);
    }
  };

  const handleToggleStatusClick = (status) => {
    onToggleTaskStatus(task.id, status);
  };

  return (
    <li>
        <span style={{ color: textColor }}>
        {task.name}
      </span>
      <button className='boton_completa' onClick={() => handleToggleStatusClick('Completada')}>Completada</button>
      <button className='boton_enproceso' onClick={() => handleToggleStatusClick('En Proceso')}>En Proceso</button>
      <button className='boton_eliminar' onClick={handleDeleteClick}>Eliminar</button>
     </li>
  );
}

export default TaskItem;

