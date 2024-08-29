// src/DSA.js
import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import ProblemList from './ProblemList'; // Adjust import as needed

const topics = [
    { name: 'Arrays', path: 'arrays' },
    { name: 'Strings', path: 'strings' },
    // Add other topics here
];

const Accordion = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid #ddd;
`;

const AccordionHeader = styled.button`
  background-color: #f4f4f4;
  border: none;
  padding: 10px 15px;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const AccordionContent = styled.div`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  padding: 10px 15px;
  background-color: #fafafa;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;

const DSA = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <h1>DSA Topics</h1>
            <nav>
                <Accordion>
                    {topics.map((topic, index) => (
                        <AccordionItem key={topic.path}>
                            <AccordionHeader onClick={() => toggleAccordion(index)}>
                                {topic.name}
                            </AccordionHeader>
                            <AccordionContent isActive={activeIndex === index}>
                                <List>
                                    <ListItem><Link to={`/dsa/${topic.path}`}>View Problems</Link></ListItem>
                                </List>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </nav>
            <Routes>
                {topics.map(topic => (
                    <Route key={topic.path} path={topic.path} element={<ProblemList topic={topic.path} />} />
                ))}
            </Routes>
        </div>
    );
};

export default DSA;
