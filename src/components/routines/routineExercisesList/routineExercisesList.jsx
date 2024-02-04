import React from "react";

const RoutineExercisesList = ({ exercises }) => {
  return (
    <div className="exercise">
      {exercises.map((exercise, index) => (
        <div className="exercise" key={index}>
          <h3>{exercise.name}</h3>
          <p>Sets: {exercise.sets.length}</p>
        </div>
      ))}
    </div>
  );
};

export default RoutineExercisesList;
