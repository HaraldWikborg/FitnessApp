import React, { useEffect, useState } from "react";

const Schedule = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = new Date().getDay();
  const [schedule, setSchedule] = useState(
    JSON.parse(localStorage.getItem("weeklyActivities"))
  );

  const handleCalendarClick = (day) => {
    let selectedDay = document.getElementById(day);
    selectedDay.className += " selectedDay";
    selectedDay.lastChild.hidden = false;
    resetSelection(day);
  };

  const resetSelection = (day) => {
    let selectedDay = document.getElementById(day);
    let otherDays = daysOfWeek.filter((d) => d !== day);
    otherDays.forEach((d) => {
      let day = document.getElementById(d);
      d === daysOfWeek[currentDay]
        ? (day.className = "weeklyDay currentDay")
        : (day.className = "weeklyDay");
      day.lastChild.hidden = true;
    });
  };

  const handleRoutineChange = (event) => {
    console.log(event.target.value);
    let selectedDay = event.target.parentElement;
    let selectedActivity = event.target.value;
    let selectedDayName = selectedDay.id;
    let weeklyActivities = JSON.parse(localStorage.getItem("weeklyActivities"));
    weeklyActivities[selectedDayName] = selectedActivity;
    setSchedule(weeklyActivities);
    localStorage.setItem("weeklyActivities", JSON.stringify(weeklyActivities));
    resetSelection("none");
  };

  return (
    <div className="weeklyCalendar">
      {daysOfWeek.map((day, index) => (
        <div
          key={index}
          id={day}
          className={
            index === currentDay ? "weeklyDay currentDay" : "weeklyDay"
          }
          onClick={() => handleCalendarClick(day)}
        >
          <h3>{day}</h3>
          <p>{schedule ? schedule[day] : "no plans"}</p>
          <select hidden={true} onChange={(e) => handleRoutineChange(e)}>
            <option value="Chest">Chest</option>
            <option value="Back">Back</option>
            <option value="Legs and shoulders">Legs and shoulders</option>
            <option value="Core">Core</option>
            <option value="Cardio">Cardio</option>
            <option value="Rest">Rest</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
