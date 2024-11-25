import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProjectDetails from './pages/ProjectDetails';
import Settings from './pages/Settings';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();

  // Exclude the header on the Home page
  const isHomePage = location.pathname === '/';

  return (
    <div className="app">
      {!isHomePage && (
        <header>
          <h1>Project Management Dashboard</h1>
          <nav>
            <a href="/dashboard">Dashboard</a>
            <a href="/settings">Settings</a>
          </nav>
        </header>
      )}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
      </main>
      {/* Uncomment if you want a footer */}
      {/* {!isHomePage && (
        <footer>
          <p>© 2024 Project Management Dashboard</p>
        </footer>
      )} */}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
