import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import projectsReducer from './features/projectsSlice';
import tasksReducer from './features/tasksSlice';
import teamReducer from './features/teamSlice';
import 'react-quill/dist/quill.snow.css';



import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { loadState, saveState } from './pages/localStorage';

const persistedState = loadState();

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    tasks: tasksReducer,
    team: teamReducer,
  },
  preloadedState: persistedState, // Load persisted state here
});

// Subscribe to store changes to save to localStorage
store.subscribe(() => {
  saveState({
    projects: store.getState().projects,
    tasks: store.getState().tasks,
    team: store.getState().team,
  });
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <DndProvider backend={HTML5Backend}>
     <App />
     </DndProvider>
</Provider>
);


reportWebVitals();
