import React, { useState } from 'react';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleDarkModeToggle = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleNotificationsToggle = () => {
    setNotifications((prev) => !prev);
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="settings-option">
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
          Enable Dark Mode
        </label>
      </div>
      {/* <div className="settings-option">
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={handleNotificationsToggle}
          />
          Enable Notifications
        </label>
      </div> */}
    </div>
  );
}

export default Settings;
