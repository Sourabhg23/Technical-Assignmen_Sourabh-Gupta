import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';

// Register the required Chart.js components
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

function TaskDistributionChart({ taskCounts }) {
  const data = {
    labels: ['To Do', 'In Progress', 'Done'],
    datasets: [
      {
        label: 'Task Count',
        data: [taskCounts.todo, taskCounts.inProgress, taskCounts.done],
        backgroundColor: ['#ff6384', '#36a2eb', '#4bc0c0'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows custom height/width
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Task States',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Tasks',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{  height: '400px', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default TaskDistributionChart;
