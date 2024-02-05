import RoutineExercisesList from "../routineExercisesList/routineExercisesList.jsx";

const RoutineList = ({
  routines,
  handleAdd,
  handleEdit,
  edit,
  setEdit,
  deleteItem,
}) => {
  return (
    <div>
      <div className="routinesList">
        {routines.map((routineKey, index) => {
          let routine = routineKey;
          let exercises = routine.exercises;
          return (
            <div className="cardCont">
              <div className="routineCard" key={index}>
                <div className="routineTitle">{routine.name}</div>
                <RoutineExercisesList exercises={exercises} />
              </div>
              {edit ? (
                <button
                  className="deleteButton"
                  id={routine.id}
                  onClick={deleteItem}
                >
                  Delete
                </button>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
      <div className="buttons">
        {edit ? (
          <button className="editButton" onClick={() => setEdit(false)}>
            Done
          </button>
        ) : (
          <>
            <button className="editButton" onClick={handleEdit}>
              Edit
            </button>
            <button className="editButton" onClick={handleAdd}>
              Add
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RoutineList;
