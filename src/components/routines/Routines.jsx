import "./Routines.css";
import { useState } from "react";
import routinesList from "../../assets/data/routines";
import NewRoutine from "./subComp/NewRoutine.jsx";
import RoutineList from "./subComp/RoutineList.jsx";
function Routines() {
  const [routines, setRoutines] = useState(routinesList);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };
  const handleAdd = () => {
    setAdd(true);
  };
  const deleteItem = (e) => {
    let newRoutines = [...routines];
    console.log("ID: " + e.target.id);
    let index = newRoutines.findIndex((routine) => routine.id == e.target.id);
    newRoutines.splice(index, 1);
    setRoutines(newRoutines);
  };
  return (
    <div className="routines">
      {add ? (
        <NewRoutine
          routines={routines}
          setRoutines={setRoutines}
          setAdd={setAdd}
        />
      ) : (
        <RoutineList
          routines={routines}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          edit={edit}
          setEdit={setEdit}
          deleteItem={deleteItem}
        />
      )}
    </div>
  );
}

export default Routines;
