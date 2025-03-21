import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Sidebar from './components/Sidebar';
import './styles/global.css'; // Global styles

function App() {
  return (
    <Router>
      <div className="layout pattern--white">
        <Sidebar />
        <div className="page_mainContent">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <div className="testing"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
