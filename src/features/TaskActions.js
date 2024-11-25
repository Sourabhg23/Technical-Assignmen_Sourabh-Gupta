import { addTask, updateTask, deleteTask, moveTask } from './tasksSlice';

export const createTask = (dispatch, taskData) => {
  dispatch(addTask(taskData));
};

export const modifyTask = (dispatch, taskData) => {
  dispatch(updateTask(taskData));
};

export const removeTask = (dispatch, taskId) => {
  dispatch(deleteTask({ id: taskId }));
};

export const changeTaskState = (dispatch, taskId, newState) => {
  dispatch(moveTask({ id: taskId, newState }));
};
