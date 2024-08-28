// src/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  background-color: #282c34;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const Nav = styled.nav`
  display: flex;
  margin-right: 30px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <HeaderWrapper>
      <Logo>DhanuStudySpace</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/feedback">Feedback</NavLink>
        {isLoggedIn ? (
          <NavLink to="/logout" onClick={onLogout}>Logout</NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
