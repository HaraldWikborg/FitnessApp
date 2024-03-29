import { NavLink } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";
import ProfileCard from "./subComponents/profileCard";
import Schedule from "./subComponents/schedule";
function Home() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <div className="home">
      {user ? (
        <>
          <h1 className="welcome">Welcome {user.username}!</h1>
          <ProfileCard />
          <Schedule />
        </>
      ) : (
        <div className="container">
          <div className="notLoggedInPage">
            <h1>Welcome!</h1>
            <p>Please log in to continue.</p>
            <NavLink className="navLinkB" to={"/login"}>
              <div className="button" user="user">
                Log in
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
