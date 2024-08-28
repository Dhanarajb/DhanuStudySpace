// src/DSA.js
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ProblemList from './ProblemList'; // Adjust import as needed

const DSA = () => {
    return (
        <div>
            <h1>DSA Topics</h1>
            <nav>
                <ul>
                    <li><Link to="/dsa/arrays">Arrays</Link></li>
                    <li><Link to="/dsa/strings">Strings</Link></li>
                    {/* Add other topics here */}
                </ul>
            </nav>
            <Routes>
                <Route path="arrays" element={<ProblemList topic="arrays" />} />
                <Route path="strings" element={<ProblemList topic="strings" />} />
                {/* Add routes for other topics */}
            </Routes>
        </div>
    );
};

export default DSA;
