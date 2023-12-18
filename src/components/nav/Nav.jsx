import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (

        <div className='Nav'>
            <ul>
                <li>
                    <NavLink to="/" className='navLink'>Fitness</NavLink>
                </li>
                <li>
                    <NavLink end to="/exercises" className='navLink'>Exercises</NavLink>
                </li>
                <li>
                    <NavLink to="/routines" className='navLink'>Routines</NavLink>
                </li>
                <li>
                    <NavLink to="/plan" className='navLink'>Plan</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className='navLink'>Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className='navLink'>Settings</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;