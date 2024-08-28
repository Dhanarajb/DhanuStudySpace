import React from 'react';
import './Contact.css'; // Import the CSS file for styling

function Contact() {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span className="contact-text">Phone: <a href="tel:+959089130">959089130</a></span>
            </div>
            <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span className="contact-text">Email: <a href="mailto:dhanarajbhaskar690@gmail.com">dhanarajbhaskar690@gmail.com</a></span>
            </div>
            <div className="contact-item">
                <span className="contact-icon">🔗</span>
                <span className="contact-text">LinkedIn: <a href="https://www.linkedin.com/in/dhanaraj-bhaskar-532111b9/" target="_blank" rel="noopener noreferrer">Dhanaraj Bhaskar</a></span>
            </div>
            <div className="contact-item">
                <span className="contact-icon">🐱</span>
                <span className="contact-text">GitHub: <a href="https://github.com/Dhanarajb" target="_blank" rel="noopener noreferrer">Dhanarajb</a></span>
            </div>
        </div>
    );
}

export default Contact;
