import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Correct import
import '../styles/global.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state

  return (
    <div className=" pattern pattern--black sidebar">
      <img src="/pokemon-scarlet-logo-medium-up.webp" alt="Pikachu Icon" />
      <img src="/pokemon-violet-logo-medium-up.webp" alt="Pikachu Icon" />
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
    </div>
  );
};

export default Sidebar;
