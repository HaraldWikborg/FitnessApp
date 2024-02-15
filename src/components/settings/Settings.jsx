import React from "react";
import "./Settings.css";

function Settings() {
  const handleChangeProfile = () => {
    // Logic to change profile information
  };

  const handleLogout = () => {
    // Logic to log out the user
  };

  const handleDeleteUser = () => {
    // Logic to delete the user
  };

  return (
    <div className="settingPage">
      <h1>Settings</h1>
      <div className="profileInfo">
        <h3>Profile Information</h3>
        <p>Name: John Doe</p>
        <p>Email: </p>
      </div>
      <button onClick={handleChangeProfile}>Change Profile Information</button>
      <button onClick={handleLogout} className="logOut">
        Log Out
      </button>
      <button onClick={handleDeleteUser} className="deleteUser">
        Delete User
      </button>
    </div>
  );
}

export default Settings;
