import "./Routines.css";
import { useState } from "react";
import routinesList from "../../assets/data/routines";
import RoutineExercisesList from "./routineExercisesList/routineExercisesList";

function Routines() {
  const [routines] = useState(routinesList);

  return (
    <div className="routines">
      <div className="routinesList">
        {routines.map((routineKey, index) => {
          let routine = routineKey;
          let exercises = routine.exercises;
          console.log(exercises);
          //exercises wont be treated as an array even though it logs as one
          return (
            <div className="routineCard" key={index}>
              <div className="routineTitle">{routine.name}</div>
              <RoutineExercisesList exercises={exercises} />
            </div>
          );
        })}
        <div className="editButton">Edit / Add</div>
      </div>
    </div>
  );
}

export default Routines;
