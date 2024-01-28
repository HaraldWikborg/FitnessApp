import "./Routines.css";
import { useState } from "react";
import routinesList from "../../assets/data/routines";

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
              <div className="title">{routine.name}</div>
              <div className="exercises">
                {exercises && Array.isArray(exercises)
                  ? exercises.map((exercise, index) => {
                      return (
                        <div className="exerciseCard" key={index}>
                          <div className="exerciseName">{exercise.name}</div>
                          <div className="exerciseSets">{exercise.sets}</div>
                        </div>
                      );
                    })
                  : null}
              </div>
              <div className="button">Add</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Routines;
