import React from "react";

const RoutineExercisesList = ({ exercises }) => {
  return (
    <>
      {exercises.map((exercise, index) => (
        <div className="exercise" key={index}>
          <h3>{exercise.name}</h3>
          <p>
            Sets:
            {exercise.sets.map((set, index) => (
              <span key={index}>{set}, </span>
            ))}
          </p>
        </div>
      ))}
    </>
  );
};

export default RoutineExercisesList;
