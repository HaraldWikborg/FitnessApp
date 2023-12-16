import { useNavigate } from 'react-router-dom';
import './NotFound.css'
import { useEffect } from 'react';

function NotFound () {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        }, 3000)
    }, [])
    return (
        <>
            <h1>404 Page not found</h1>
        </>
    )
}

export default NotFound;