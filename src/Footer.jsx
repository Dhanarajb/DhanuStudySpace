// src/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 30px;
  background-color: #282c34;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

const FooterContent = styled.div`
  text-align: center;
  font-size: 12px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <p>&copy; 2024 DhanuStudySpace. All rights reserved.</p>
            </FooterContent>
        </FooterWrapper>
    );
};

export default Footer;
