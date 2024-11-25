import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import TaskBoard from '../components/Dashboard/TaskBoard';
import AddTaskForm from '../components/Dashboard/Charts/AddTaskForm';
import { addTask, moveTask, updateTask } from '../features/tasksSlice';

function ProjectDetails() {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = useSelector((state) =>
    state.projects.find((proj) => proj.id === projectId)
  );
  const tasks = useSelector((state) =>
    state.tasks.filter((task) => task.projectId === projectId)
  );
  const dispatch = useDispatch();

  const handleAddTask = (task) => {
    dispatch(addTask({ ...task, projectId }));
  };

  const handleMoveTask = (taskId, newState) => {
    dispatch(moveTask({ id: taskId, newState }));
  };

  const updateTaskDescription = (taskId, description) => {
    dispatch(updateTask({ id: taskId, description }));
  };

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-details">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <div className="project-tasks">
        <h2>Tasks</h2>
        <TaskBoard
          tasks={tasks}
          moveTask={handleMoveTask}
          updateTaskDescription={updateTaskDescription}
        />
        <h3>Add a New Task</h3>
        <AddTaskForm onSubmit={handleAddTask} />
      </div>
    </div>
  );
}

export default ProjectDetails;
