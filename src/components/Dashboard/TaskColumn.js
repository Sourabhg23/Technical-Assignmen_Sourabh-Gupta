import React from 'react';
import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';

function TaskColumn({ state, tasks, moveTask, updateTaskDescription }) {
  const [, dropRef] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      if (item.currentState !== state) {
        moveTask(item.id, state);
      }
    },
  });

  return (
    <div
      ref={dropRef}
      className="task-column p-3 border rounded me-3 bg-light"
      style={{ width: '30%' }}
    >
      <h4 className="text-center">{state}</h4>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            moveTask={moveTask}
            updateTaskDescription={updateTaskDescription}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskColumn;
