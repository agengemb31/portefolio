import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useEffect, useState, forwardRef } from "react";

const Header = forwardRef((props, ref,) => {
	const { height } = props;
  const [isTransparent, setIsTransparent] = useState(true);

useEffect(() => {
  const handleScroll = () => {
	  if (height === undefined) return;
	const homeHeight = document.getElementById("accueil").offsetHeight;
    setIsTransparent(window.scrollY < homeHeight - height);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // pour le chargement initial

  return () => window.removeEventListener("scroll", handleScroll);
}, [height]);

  
	return (
    <div
      ref={ref} // <-- attacher le ref ici
      className={`${isTransparent ? "bg-dark-transparent" : "bg-dark"} container-fluid d-flex text-white justify-content-between align-items-center`}
      style={{
        minHeight: "10vh",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        paddingLeft: "200px",
        paddingRight: "200px",
		   transition: "background-color 0.3s ease",
      }}
    > 
      {/* Navbar collée en haut */}
      <nav className="navbar navbar-dark navbar-expand-lg w-100">
	  <a class="navbar-brand" href="#accueil">
	  	<img src="/logo.png" alt="logo Agengemb" style={{ height: "8vh"}}/>
	  </a>
	<button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
	 

	 <div id="mainNavbar" className="collapse navbar-collapse">
          <ul className="ms-auto navbar-nav flex-column flex-lg-row">
		<li className="nav-item">
            		<a href="#accueil" className="nav-link text-white">Accueil</a>
            	</li>
		<li className="nav-item">
	  	<a href="#apropos" className="nav-link text-white">À Propos</a>
          	</li>  
	  
		<li className="nav-item">
	  	<a href="#projets" className="nav-link text-white">Projets</a>
          	</li>  
		<li className="nav-item">
	  <a href="#contact" className="nav-link text-white">Contact</a>
        	</li>
	  </ul>
	  </div>
      </nav>
    </div>
  );
});

export default Header;
