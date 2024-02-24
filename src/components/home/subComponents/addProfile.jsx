import React, { useState } from "react";

const AddProfile = ({ setProfileData }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    if (!name || !age || !weight || !height) {
      alert("Please fill out all fields");
      return;
    }
    if (age < 0 || weight < 0 || height < 0) {
      alert("Please enter valid values for age, weight and height");
      return;
    }
    setProfileData({ name, age, weight, height });
    localStorage.setItem(
      "profile",
      JSON.stringify({ name, age, weight, height })
    );
    // Reset form fields
    setName("");
    setAge("");
    setWeight("");
    setHeight("");
  };

  return (
    <div className="add-profile">
      <h2>Add Profile</h2>
      <form className="add-profile-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Weight:
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br />
        <label>
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProfile;
