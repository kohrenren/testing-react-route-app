import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to My React App</h1>

        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link> {/* Link to HomePage */}
            </li>
            <li>
              <Link to="/about">About</Link> {/* Link to AboutPage */}
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;