
import Header from './Header.js';
import Footer from './Footer.js';
import HomeSection from '../sections/homeSection/HomeSection.js';
import AboutSection from '../sections/aboutSection/AboutSection.js';
import React, { useState, useEffect, useRef } from "react";
import ProjectsSection from '../sections/projectsSection/ProjectsSection.js';
import ContactSection from '../sections/contactSection/ContactSection.js';
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
  	<div className="d-flex flex-column min-vh-100">
	  <Header ref={headerRef} height={headerHeight}/>
    <main className="flex-grow-1 ">
    <HomeSection bg="bg-light" textColor="text-white" height={headerHeight} />
    <AboutSection bg="bg-light" textColor="text-black" height={headerHeight} />
    <ProjectsSection bg="bg-light" textColor="text-white" height={headerHeight} />
    <ContactSection bg="bg-light" textColor="text-black" height={headerHeight} />
	  </main>
    <Footer/>
	  </div>
  );
}

export default App;
