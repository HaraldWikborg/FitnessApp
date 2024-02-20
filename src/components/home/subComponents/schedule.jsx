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

  const handleCalendarClick = (day) => {
    alert("You clicked on" + day);
  };
  return (
    <div className="weeklyCalendar">
      {daysOfWeek.map((day, index) => (
        <div
          key={index}
          className={
            index === currentDay ? "weeklyDay currentDay" : "weeklyDay"
          }
          onClick={() => handleCalendarClick(day)}
        >
          <h3>{day}</h3>
          <p>{schedule ? schedule[day] : "no plans"}</p>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
