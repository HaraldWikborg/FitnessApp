import React, { useState } from "react";
import "./Plan.css";

const Plan = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (day, event) => {
    const updatedEvents = [...events];
    if (updatedEvents.find((e) => e.day === day)) {
      updatedEvents.forEach((e) => {
        if (e.day === day) {
          e.event = event;
        }
      });
    } else {
      updatedEvents.push({ day, event });
    }
    setEvents(updatedEvents);
  };

  const renderCalendarDays = () => {
    const calendarDays = [...Array(31).keys()].map((day) => (
      <div key={day} className="calendarDay">
        <span className="dayNumber">{day + 1}</span>
        {events.map((event) =>
          event.day === day + 1 ? (
            <div key={event.day} className="event">
              {event.event}
            </div>
          ) : null
        )}
        <select
          className="addButton"
          onChange={(e) => addEvent(day + 1, e.target.value)}
        >
          <option value="Rest">Rest</option>
          <option value="Chest and tricep">Chest and tricep</option>
          <option value="Back and bicep">Back and bicep</option>
          <option value="Legs and shoulders">Legs and shoulders</option>
        </select>
      </div>
    ));

    return calendarDays;
  };

  return (
    <div className="calendar">
      <h2>Monthly Calendar</h2>
      <div className="calendarDays">{renderCalendarDays()}</div>
    </div>
  );
};

export default Plan;
