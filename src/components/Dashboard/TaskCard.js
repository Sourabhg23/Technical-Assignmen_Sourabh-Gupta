import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import ReactQuill from 'react-quill';

function TaskCard({ task, moveTask, updateTaskDescription }) {
  const [, dragRef] = useDrag({
    type: 'TASK',
    item: { id: task.id, currentState: task.state },
  });

  const [description, setDescription] = useState(task.description);

  const handleDescriptionChange = (value) => {
    setDescription(value);
    updateTaskDescription(task.id, value);
  };

  return (
    <div
      ref={dragRef}
      className="task-card p-2 border rounded mb-2 bg-light"
      style={{ cursor: 'grab' }}
    >
      <h5>{task.title}</h5>
      <ReactQuill
        value={description}
        onChange={handleDescriptionChange}
        theme="snow"
        placeholder="Edit task description..."
        className="mt-2"
        // onFocus={(e) => e.stopPropagation()} 
        onMouseDown={(e) => e.stopPropagation()} // Prevent Quill from triggering drag
      />
    </div>
  );
}

export default TaskCard;
