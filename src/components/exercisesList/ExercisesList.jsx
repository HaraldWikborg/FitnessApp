import { useLocation } from 'react-router-dom';
import './ExercisesList.css';

function ExercisesList ({ type }) {
    const location = useLocation();
    
    return (
        <div className='List'>
            <h1>{location.state}</h1>
            
        </div>
    )
}

export default ExercisesList;
