import React from "react";
import "./profileCard.css";
import { useState, useEffect } from "react";
import { profilePic } from "./../../../assets/images/svgs.jsx";
import AddProfile from "./addProfile.jsx";

const ProfileCard = () => {
  // Replace these with your actual profile information
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    // logic to fetch profile data when server is up:
    /*fetch("https://api.example.com/profile")
      .then((response) => response.json())
      .then((data) => setProfileData(data));
    */
    //fetch profile data from local storage if available
    const profile = JSON.parse(localStorage.getItem("profile"));

    // logic to fetch profile data when server is down:
    if (!profile) {
      setProfileData({});
    } else {
      setProfileData(profile);
    }
  }, []);
  const addProfileInfo = () => {
    // Add profile info
    const profileForm = document.querySelector(".profile-details-form");
    const noProfileInfo = document.querySelector(".no-profile-info");
    noProfileInfo.hidden = true;
    profileForm.hidden = false;
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
      {profileData.name ? (
        <div className="profile-details">
          <h2>{profileData.name}</h2>
          <p>Age: {profileData.age}</p>
          <p>Weight: {profileData.weight}</p>
          <p>Height: {profileData.height}</p>
        </div>
      ) : (
        <div className="profile-details-add">
          <div className="no-profile-info" hidden={false}>
            <h2>No Profile info</h2>
            <button onClick={addProfileInfo} className="button">
              Add Profile info
            </button>
          </div>
          <div className="profile-details-form" hidden={true}>
            <AddProfile setProfileData={setProfileData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
