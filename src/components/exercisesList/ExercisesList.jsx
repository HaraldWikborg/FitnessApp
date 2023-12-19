import "./ExercisesList.css";
import exerciseList from "../../assets/data/exercises";

function ExercisesList() {
  return (
    <div className="ExercisesList">
      <div className="exercisesList">
        {Object.keys(exerciseList).map((exerciseKey, index) => {
          const exercise = exerciseList[exerciseKey];
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
