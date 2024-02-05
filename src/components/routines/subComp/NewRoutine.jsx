import React, { useState } from "react";

const NewRoutine = ({ routines, setRoutines, setAdd }) => {
  const [routineTitle, setRoutineTitle] = useState("");

  const handleTitleChange = (e) => {
    setRoutineTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newRoutine = {
      id: Math.floor(Math.random() * 10000),
      name: routineTitle,
      exercises: [],
    };
    console.log(newRoutine);
    setRoutines((routines) => [...routines, newRoutine]);
    setAdd(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Routine Title:
        <input type="text" value={routineTitle} onChange={handleTitleChange} />
      </label>
      <br />
      <label>Add exercises to routine:</label>
      <br />
      <button type="submit">Add Routine</button>
    </form>
  );
};

export default NewRoutine;
