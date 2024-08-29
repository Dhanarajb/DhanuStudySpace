import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Speak the goodbye message
        const message = 'Bye Dhanaraj';
        speakMessage(message);

        // Perform logout and navigate
        onLogout();
        navigate('/');
    };

    const speakMessage = (message) => {
        const utterance = new SpeechSynthesisUtterance(message);
        const femaleVoice = window.speechSynthesis.getVoices().find(voice => voice.name.includes('Female'));
        if (femaleVoice) {
            utterance.voice = femaleVoice;
        }
        utterance.rate = 0.5; // Slow down the speech (default is 1)
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="logout">
            <h2>Logging Out</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
