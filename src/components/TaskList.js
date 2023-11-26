
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask, onToggleTaskStatus }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTaskStatus={onToggleTaskStatus}
        />
      ))}
    </ul>
  );
}

export default TaskList;
