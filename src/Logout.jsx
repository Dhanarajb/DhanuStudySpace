import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    return (
        <div className="logout">
            <h2>Logging Out</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
