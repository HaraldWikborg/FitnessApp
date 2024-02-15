import React from "react";
import "./Settings.css";
import { useState, useEffect } from "react";
function Settings() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

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
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <button onClick={handleChangeProfile}>Edit</button>
      </div>

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
