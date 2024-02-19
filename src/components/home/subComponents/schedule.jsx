import React from "react";

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
  const schedule = JSON.parse(localStorage.getItem("weeklyActivities"));
  return (
    <div className="weeklyCalendar">
      {daysOfWeek.map((day, index) => (
        <div
          key={index}
          className={
            index === currentDay ? "weeklyDay currentDay" : "weeklyDay"
          }
        >
          <h3>{day}</h3>
          <p>{schedule ? schedule[day] : "no plans"}</p>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
