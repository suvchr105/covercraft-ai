import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Generator from './pages/Generator';
import About from './pages/About';

const theme = {
  colors: {
    primary: '#4361ee',
    secondary: '#3a0ca3',
    accent: '#f72585',
    background: '#f8f9fa',
    text: '#212529',
    light: '#ffffff',
    dark: '#343a40'
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Open Sans', sans-serif"
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '1024px'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
