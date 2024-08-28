// src/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }

  .app-container {
    margin-left: 210px;
    padding: 20px;

    @media (max-width: 768px) {
      margin-left: 0;
      padding: 10px;
    }
  }
`;

export default GlobalStyle;
