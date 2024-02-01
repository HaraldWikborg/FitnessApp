import React, { useState } from "react";
import "./Plan.css";
import EditPlan from "./EditPlan";
import CustomPlan from "./CustomPlan";

const Plan = () => {
  // Initialize state to hold activities for each day, with empty string as default.
  const [activities, setActivities] = useState({
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "",
  });
  //initialize state to hold default activity options
  const [activityOptions, setActivityOptions] = useState([
    "Chest",
    "Back",
    "Legs and shoulders",
    "Core",
    "Cardio",
    "Rest",
  ]);
  const [customSet, setCustomSet] = useState(false);

  // Function to handle changes in activity selection
  const handleActivityChange = (day, event) => {
    const { value } = event.target;
    setActivities((prevState) => ({
      ...prevState,
      [day]: value,
    }));
  };

  const saveActivities = () => {
    // implement saving activities to a server or storing them locally.
    setCustomSet(true);
    console.log("Activities saved:", activities);
    alert("Activities saved successfully!");
  };
  const edit = () => {
    setCustomSet(false);
  };
  return (
    <div>
      {customSet ? (
        <CustomPlan
          activities={activities}
          activityOptions={activityOptions}
          handleActivityChange={handleActivityChange}
          edit={edit}
        />
      ) : (
        <EditPlan
          activities={activities}
          activityOptions={activityOptions}
          handleActivityChange={handleActivityChange}
          saveActivities={saveActivities}
        />
      )}
    </div>
  );
};

export default Plan;
