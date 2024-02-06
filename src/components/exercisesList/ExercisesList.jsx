import "./ExercisesList.css";
import exerciseList from "../../assets/data/exercises";
import { useEffect, useState } from "react";

function ExercisesList() {
  const [filter, setFilter] = useState("all");
  const [filteredExercises, setFilteredExercises] = useState(exerciseList);

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
    <div className="listWrapper">
      <div className="filter">
        <div className="filter1">
          <label className="label" htmlFor="muscleGroup">
            Muscle Group
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
        </div>
      </div>
      <div className="exercisesList">
        {filteredExercises.map((exerciseKey, index) => {
          let exercise = exerciseKey;
          return (
            <div className="exerciseCard" key={index}>
              <div className="title">{exercise.name}</div>
              <div className="description">
                {exercise.PR ? `Your PR: ${exercise.PR}` : ""}
                <br />
                Muscle groups:{" "}
                {exercise.muscleGroup.map((muscle) => muscle + " ")}
              </div>
              <div className="button">Add</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExercisesList;
