// src/styles/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Poppins:wght@500;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${props => props.theme.fonts.body};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
  }
  
  h2 {
    font-size: 2rem;
    color: ${props => props.theme.colors.secondary};
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
  
  button {
    font-family: ${props => props.theme.fonts.body};
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
  
  main {
    min-height: calc(100vh - 160px);
    padding: 2rem 0;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .section {
    padding: 4rem 0;
  }
`;

export default GlobalStyles;
