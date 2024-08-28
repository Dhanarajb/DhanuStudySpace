import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { problems } from './data';

function ProblemList() {
    const { topic } = useParams();

    if (!topic || !problems[topic]) {
        return <p>No problems available for this topic.</p>;
    }

    const topicProblems = problems[topic];

    return (
        <div className="problem-list">
            <h2>{topic.charAt(0).toUpperCase() + topic.slice(1)} Problems</h2>
            {topicProblems.length > 0 ? (
                <ul>
                    {topicProblems.map((problem, index) => (
                        <li key={index}>
                            <Link to={`/dsa/${topic}/${problem.title}`}>{problem.title}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No problems available for this topic.</p>
            )}
        </div>
    );
}

export default ProblemList;
