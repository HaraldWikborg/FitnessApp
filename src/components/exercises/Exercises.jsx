import './Exercises.css';
import ExercisesList from '../exercisesList/ExercisesList';
function Exercises () {
    let type = null;
    return (
        <div className='Exercises'>
            {
                !type ? (
                    <div className='options'>
                        <div className='option'>Strength</div>
                        <div className='option'>Cardio</div>
                        <div className='option'>Calistenics</div>
                    </div>
                ) : (
                    <ExercisesList type={type}></ExercisesList>
                )
            }
        </div>
    )
}

export default Exercises;