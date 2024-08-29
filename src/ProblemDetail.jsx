import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { problems } from './data';
import './ProblemDetails.css';

function ProblemDetail() {
    const { topic, problemTitle } = useParams();
    const [openPanel, setOpenPanel] = useState(null);

    if (!topic || !problemTitle || !problems[topic]) {
        return <p>Problem not found.</p>;
    }

    const problem = problems[topic].find(p => p.title === problemTitle);

    if (!problem) {
        return <p>Problem not found.</p>;
    }

    const togglePanel = (panel) => {
        setOpenPanel(openPanel === panel ? null : panel);
    };

    return (
        <div className="problem-detail">
            {/* Video Container */}
            <div className="video-container">
                <iframe
                    width="100%"
                    height="100%"
                    src={problem.videoLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <h2>{problem.title}</h2>
            <div className="solution">
                <div>
                    <h3 onClick={() => togglePanel('bruteForce')}>
                        Brute Force Solution
                    </h3>
                    <div className={openPanel === 'bruteForce' ? 'expanded' : 'collapsed'}>
                        <pre>{problem.solutions.bruteForce.code}</pre>
                        <p>{problem.solutions.bruteForce.explanation}</p>
                    </div>
                </div>
                <div>
                    <h3 onClick={() => togglePanel('optimal')}>
                        Optimal Solution
                    </h3>
                    <div className={openPanel === 'optimal' ? 'expanded' : 'collapsed'}>
                        <pre>{problem.solutions.optimal.code}</pre>
                        <p>{problem.solutions.optimal.explanation}</p>
                    </div>
                </div>
                <div>
                    <h3 onClick={() => togglePanel('pattern')}>
                        Pattern-Based Solution
                    </h3>
                    <div className={openPanel === 'pattern' ? 'expanded' : 'collapsed'}>
                        <pre>{problem.solutions.pattern.code}</pre>
                        <p>{problem.solutions.pattern.explanation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProblemDetail;
