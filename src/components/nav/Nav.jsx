import './Nav.css';

function Nav() {
    return (
        <div className='Nav'>
            <div className='logo'>Fitness</div>
            <div className='navButton'>Exercises</div>
            <div className='navButton'>Routines</div>
            <div className='navButton'>Plan</div>
            <div className='navButton'>Blog</div>
            <div className='navButton settings'></div>
        </div>
    )
}

export default Nav;