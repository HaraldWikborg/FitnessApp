import React, { useState } from "react";
import exerciseList from "../../../assets/data/exercises";
const NewRoutine = ({ routines, setRoutines, setAdd }) => {
  const [routineTitle, setRoutineTitle] = useState("");
  const [addedExercises, setAddedExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState(exerciseList);
  const [filter, setFilter] = useState("all");

  const handleTitleChange = (e) => {
    setRoutineTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (routineTitle.length === 0) {
      alert("Please enter a routine title");
      return;
    }
    let newRoutine = {
      id: Math.floor(Math.random() * 10000),
      name: routineTitle,
      exercises: [...addedExercises],
    };
    console.log(newRoutine);
    setRoutines((routines) => [...routines, newRoutine]);
    setAdd(false);
  };
  const addExercise = () => {
    let exercise = document.getElementById("exercises").value;
    let newExercise = exerciseList.find((ex) => ex.name === exercise);
    setAddedExercises((addedExercises) => [...addedExercises, newExercise]);
    console.log(addedExercises);
  };
  const handleFilterChange = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
    const filtered = exerciseList.filter((exercise) => {
      if (e.target.value === "all") {
        return true;
      } else {
        return exercise.muscleGroup.includes(e.target.value);
      }
    });
    setFilteredExercises(filtered);
  };
  return (
    <form className="routineForm" onSubmit={handleSubmit}>
      <label className="routineLabel">
        Routine Title:
        <input
          className="routineInput"
          type="text"
          value={routineTitle}
          onChange={handleTitleChange}
        />
      </label>
      <div className="addedExercises">
        {addedExercises ? (
          addedExercises.map((exercise, index) => {
            return (
              <div className="addedExercise" key={index}>
                {exercise.name}
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <div className="exercisesForm">
        <label className="routineLabel">
          Add exercises to routine:
          <label htmlFor="muscleGroup">
            Muscle Group:
            <select
              onChange={handleFilterChange}
              id="muscleGroup"
              name="muscleGroup"
            >
              <option value="all">All</option>
              <option value="chest">Chest</option>
              <option value="back">Back</option>
              <option value="shoulder">Shoulder</option>
              <option value="legs">Legs</option>
              <option value="tricep">Triceps</option>
              <option value="bicep">Biceps</option>
              <option value="abs">Core</option>
            </select>
          </label>
        </label>
        <label htmlFor="exercises">
          Exercises:
          <select id="exercises" name="exercises">
            {filteredExercises.map((exercise, index) => {
              return (
                <option key={index} value={exercise.name}>
                  {exercise.name}
                </option>
              );
            })}
          </select>
        </label>
        <button
          type="button"
          onClick={addExercise}
          className="addExerciseButton"
        >
          Add
        </button>
      </div>

      <br />
      <button className="editButton" type="submit">
        Add Routine
      </button>
    </form>
  );
};

export default NewRoutine;
