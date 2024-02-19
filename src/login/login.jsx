import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const LoginForm = ({ user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const handleLogin = () => {
    if (
      username &&
      password.length > 6 &&
      password.length < 20 &&
      username.length > 6 &&
      username.length < 20
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({ username: username, password: password })
      );
      setLoggedIn(true);
      alert("Login successful!");
      navigate("/");
    } else {
      alert(
        "Please enter both username and password. Password and username must be between 6 and 20 characters."
      );
    }
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        setCount(count + 1);
      }, 1000);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, []);
  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {username}!</p>
          <p>
            You are already logged in, redirecting to home screen in {count}{" "}
            seconds...
          </p>
        </>
      ) : (
        <div className="loginForm">
          <h1>Login</h1>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
