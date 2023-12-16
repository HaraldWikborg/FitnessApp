import './Exercises.css';
import ExercisesList from '../exercisesList/ExercisesList';
import { Link } from 'react-router-dom';

function Exercises () {
    let type = null;
    return (
        <div className='Exercises'>
                <button className='option'><Link to='/exercises/list' state='Strength'>Strength</Link></button>
                <button className='option'><Link to='/exercises/list'state='Cardio'>Cardio</Link></button>
                <button className='option'><Link to='/exercises/list' state='Calisthenics'>Calisthenics</Link></button>
        </div>
    )
}

export default Exercises;