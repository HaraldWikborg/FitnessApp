import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (

        <div className='Nav'>
            <ul>
                <li>
                    <NavLink to="/">Fitness</NavLink>
                </li>
                <li>
                    <NavLink end to="/exercises">Exercises</NavLink>
                </li>
                <li>
                    <NavLink to="/routines">Routines</NavLink>
                </li>
                <li>
                    <NavLink to="/plan">Plan</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/settings">Settings</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;