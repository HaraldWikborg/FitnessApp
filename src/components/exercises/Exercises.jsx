import "./Exercises.css";
import ExercisesList from "../exercisesList/ExercisesList";
import { Link } from "react-router-dom";

function Exercises() {
  return (
    <div className="Exercises">
      <div className="optionTab">
        <Link to="/exercises/list" className="option" state="Strength">
          Strength
        </Link>
      </div>
      <div className="optionTab">
        <Link to="/exercises/list" className="option" state="Cardio">
          Cardio
        </Link>
      </div>
      <div className="optionTab">
        <Link to="/exercises/list" className="option" state="Calisthenics">
          Calisthenics
        </Link>
      </div>
    </div>
  );
}

export default Exercises;
