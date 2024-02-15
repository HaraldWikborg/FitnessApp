import React from "react";
import "./profileCard.css";

import { profilePic } from "../../../assets/images/svgs.jsx";
const ProfileCard = () => {
  // Replace these with your actual profile information
  const profileData = {
    name: "Your Name",
    age: 2,
    weight: "Not disclosed",
    height: "Tall enough",
    profilePicture: null,
  };

  return (
    <div className="profile-card">
      <div className="profile-picture-overlay">
        {profileData.profilePicture ? (
          <img
            src={profileData.profilePicture}
            alt="Profile"
            className="profile-picture"
          />
        ) : (
          profilePic()
        )}
      </div>
      <div className="profile-details">
        <h2>{profileData.name}</h2>
        <p>Age: {profileData.age}</p>
        <p>Weight: {profileData.weight}</p>
        <p>Height: {profileData.height}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
