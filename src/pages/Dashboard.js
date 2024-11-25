import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import ProjectList from '../components/Dashboard/ProjectList';
import TaskDistributionChart from '../components/Dashboard/Charts/TaskDistributionChart';
import AddProjectForm from '../components/Dashboard/Charts/AddProjectForm';
import { addProject } from '../features/projectsSlice';

function Dashboard() {
  const [isCleared, setIsCleared] = useState(false); // Track if data is cleared
  const projects = useSelector((state) => state.projects);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Calculate task distribution
  const taskCounts = {
    todo: tasks.filter((task) => task.state === 'To Do').length,
    inProgress: tasks.filter((task) => task.state === 'In Progress').length,
    done: tasks.filter((task) => task.state === 'Done').length,
  };

  const handleAddProject = (project) => {
    dispatch(addProject(project));
  };

  const handleClearAll = () => {
    localStorage.removeItem('reduxState'); // Clear localStorage
    setIsCleared(true); // Trigger re-render
  };

  useEffect(() => {
    if (isCleared) {
      setIsCleared(false); // Reset state after clearing
    }
  }, [isCleared]); // Trigger on state change

  return (
    <div className="dashboard">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Project Dashboard</h1>
        <Button variant="danger" onClick={handleClearAll}>
          Clear All
        </Button>
      </div>
      <div className="dashboard-section mb-4">
        <h2>Projects</h2>
        <ProjectList projects={projects} />
        <h3>Add a New Project</h3>
        <AddProjectForm onSubmit={handleAddProject} />
      </div>
      <div className="dashboard-section">
        <h2>Task Distribution</h2>
        <TaskDistributionChart taskCounts={taskCounts} />
      </div>
    </div>
  );
}

export default Dashboard;
