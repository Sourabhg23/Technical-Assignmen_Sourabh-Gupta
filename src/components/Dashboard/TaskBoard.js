import React from 'react';
import TaskColumn from './TaskColumn';

function TaskBoard({ tasks, moveTask, updateTaskDescription }) {
  const taskStates = ['To Do', 'In Progress', 'Done'];

  return (
    <div className="task-board d-flex">
      {taskStates.map((state) => (
        <TaskColumn
          key={state}
          state={state}
          tasks={tasks.filter((task) => task.state === state)}
          moveTask={moveTask}
          updateTaskDescription={updateTaskDescription}
        />
      ))}
    </div>
  );
}

export default TaskBoard;
