import React from 'react';
import { useParams } from 'react-router-dom';
import { problems } from './data';

function ProblemDetail() {
    const { topic, problemTitle } = useParams();

    if (!topic || !problemTitle || !problems[topic]) {
        return <p>Problem not found.</p>;
    }

    const problem = problems[topic].find(p => p.title === problemTitle);

    if (!problem) {
        return <p>Problem not found.</p>;
    }

    return (
        <div className="problem-detail">
            <h2>{problem.title}</h2>
            <div className="solution">
                <h3>Brute Force Solution</h3>
                <pre>{problem.solutions.bruteForce.code}</pre>
                <p>{problem.solutions.bruteForce.explanation}</p>

                <h3>Optimal Solution</h3>
                <pre>{problem.solutions.optimal.code}</pre>
                <p>{problem.solutions.optimal.explanation}</p>

                <h3>Pattern-Based Solution</h3>
                <pre>{problem.solutions.pattern.code}</pre>
                <p>{problem.solutions.pattern.explanation}</p>
            </div>
        </div>
    );
}

export default ProblemDetail;
