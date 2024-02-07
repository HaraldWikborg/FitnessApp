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
    let numberOfSets = document.getElementById("sets").value;
    newExercise.setSets(new Array(parseInt(numberOfSets)).fill(1));
    setAddedExercises((addedExercises) => [...addedExercises, newExercise]);
  };

  const handleFilterChange = (e) => {
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

  const removeEx = (e) => {
    let id = e.target.parentElement.id;
    let newExercises = addedExercises.filter((ex) => ex.id != id);
    setAddedExercises(newExercises);
  };
  //Add function to update reps for each set when changed
  return (
    <form className="routineForm" onSubmit={handleSubmit}>
      <label className="routineLabel">
        Routine Title:
        <input
          required
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
              <div id={exercise.id} className="addedExercise" key={index}>
                <p>{exercise.name}</p>
                <label>
                  Reps:
                  {exercise.sets.map((set, index) => {
                    return (
                      <input
                        key={index}
                        min={1}
                        max={99}
                        defaultValue="1"
                        className="numberInput"
                        type="number"
                      />
                    );
                  })}
                </label>
                <button
                  className="removeButton"
                  type="button"
                  onClick={removeEx}
                >
                  X
                </button>
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
          <label className="filterLabel" htmlFor="muscleGroup">
            Filter:
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
        <label className="filterLabel" htmlFor="exercises">
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
          <label className="filterLabel" htmlFor="sets">
            Sets:
            <input
              className="numberInput"
              type="number"
              id="sets"
              defaultValue="1"
              min="1"
              max="9"
            />
          </label>
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
