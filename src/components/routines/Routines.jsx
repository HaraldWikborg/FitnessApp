import "./Routines.css";
import { useState } from "react";
import routinesList from "../../assets/data/routines";
import RoutineExercisesList from "./routineExercisesList/routineExercisesList";

function Routines() {
  const [routines, setRoutines] = useState(routinesList);

  const handleEdit = () => {
    console.log("Edit");
  };
  const handleAdd = () => {
    console.log("Add");
  };

  return (
    <div className="routines">
      <div className="routinesList">
        {routines.map((routineKey, index) => {
          let routine = routineKey;
          let exercises = routine.exercises;
          return (
            <div className="routineCard" key={index}>
              <div className="routineTitle">{routine.name}</div>
              <RoutineExercisesList exercises={exercises} />
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button className="editButton" onClick={handleEdit}>
          Edit
        </button>
        <button className="editButton" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Routines;
