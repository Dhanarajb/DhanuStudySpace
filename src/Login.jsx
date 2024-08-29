// src/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            setVoices(availableVoices);
        };

        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate authentication
        if (username === 'dhanu' && password === 'dhanu') {
            onLogin();
            navigate('/');
            // Add sound notification
            const message = `Hi Dhanaraj, you logged in`;
            speakMessage(message);
        } else {
            alert('Invalid credentials');
        }
    };

    const speakMessage = (message) => {
        const utterance = new SpeechSynthesisUtterance(message);
        const femaleVoice = voices.find(voice => voice.name.includes('Female') || voice.name.includes('Female')); // Modify the condition based on available voices
        if (femaleVoice) {
            utterance.voice = femaleVoice;
        }
        utterance.rate = 0.8; // Slows down the speech (default is 1)
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
