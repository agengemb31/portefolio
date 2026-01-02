import logo from './logo.svg';
import Header from './Header.js';
import Footer from './Footer.js';
import HomeSection from './HomeSection.js';
import AboutSection from './AboutSection.js';
import SkillsSection from './SkillsSection.js';
import React, { useState, useEffect, useRef } from "react";
import ProjectsSection from './ProjectsSection.js';
import ContactSection from './ContactSection.js';
import './App.css';



function App() {
  const headerRef = useRef();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
  	<div><Header ref={headerRef}/>
    
    <HomeSection bg="bg-light" textColor="text-white" height={headerHeight} />
    <AboutSection bg="bg-light" textColor="text-black" height={headerHeight} />
    <ProjectsSection bg="bg-light" textColor="text-black" height={headerHeight} />
	 <ContactSection bg="bg-light" textColor="text-black" height={headerHeight} />
    <Footer/>
	  </div>
  );
}

export default App;
