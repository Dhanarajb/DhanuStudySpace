// src/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarWrapper = styled.div`
  width: 180px;
  height: calc(100vh - 60px); /* Full height minus header height */
  background-color: #f4f4f4; /* Different color from header */
  position: fixed;
  top: 60px; /* Position below the header */
  left: 0;
  overflow-y: auto;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 15px 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333; /* Darker color for better contrast */
  font-size: 16px;

  &:hover {
    color: #007bff;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <NavList>
        <NavItem>
          <NavLink to="/dsa">DSA</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/system-design">System Design</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/development">Development</NavLink>
        </NavItem>
      </NavList>
    </SidebarWrapper>
  );
};

export default Sidebar;
