import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from 'react-router-dom'; // Correct import
import '../styles/global.css';

const navLinks = [
  { path: "/home", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/features", label: "Features" },
];

const Sidebar = () => {
  // const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(navLinks.findIndex(link => link.path === location.pathname) || 0);
  const indicatorRef = useRef(null); // Reference to the indicator div
  const tabRef = useRef([]); //References for each tab
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0); 

  const handleImageLoad = () => {
    setImagesLoadedCount((prev) => prev + 1); // Increment count on each image load
  };

  useEffect(() => {
    if (imagesLoadedCount === 2) { // When both images are loaded
      updateIndicator();
    }
  }, [imagesLoadedCount, activeIndex]);
  

  const updateIndicator = () => {
    if (tabRef.current[activeIndex] && indicatorRef.current) {
      const { offsetTop, offsetHeight } = tabRef.current[activeIndex];
      indicatorRef.current.style.top = `${offsetTop}px`;
      indicatorRef.current.style.height = `${offsetHeight}px`;
    }
  };
  
  return (
    <div className=" pattern pattern--black sidebar">
      {/* <div className="sideline"></div> */}
      <img src="/pokemon-scarlet-logo-medium-up.webp" alt="Pikachu Icon" onLoad={handleImageLoad}/>
      <img src="/pokemon-violet-logo-medium-up.webp" alt="Pikachu Icon" onLoad={handleImageLoad}/>
      <nav>
        <ul>
        {navLinks.map(({path, label}, index) => (
          <li 
            key={path}
            ref={(el) => (tabRef.current[index] = el)}
            className={`nav-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <Link to={path}>{label}</Link> 
          </li>
          ))}
        </ul>
      </nav>
      <div ref={indicatorRef} className="tab-indicator"></div>
    </div>
  );
};

export default Sidebar;
