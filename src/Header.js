
import React, { forwardRef } from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderButton({title}) 
{
	return (
		<button type="button" className="btn btn btn-dark btn-lg">
		<span> {title} </span>
		</button>
	);
}


const Header = forwardRef((props, ref) => {
  return (
    <div
      ref={ref} // <-- attacher le ref ici
      className="container-fluid d-flex bg-dark text-white justify-content-between align-items-center "
      style={{
        minHeight: "10vh",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        paddingLeft: "200px",
        paddingRight: "200px"
      }}
    >
      <img 
        src="/logo.png" 
        alt="logo Agengemb"
        style={{ height: "8vh"}} 
        />

      {/* Navbar collée en bas */}
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse d-flex">
          <div className="btn-group btn-group-lg gap-3" role="group" aria-label="Banner Buttons group">
            <a href="#accueil" className="btn text-white rounded-0">Accueil</a>
            <a href="#apropos" className="btn text-white rounded-0">À Propos</a>
            <a href="#projets" className="btn text-white rounded-0">Projets</a>
            <a href="#contact" className="btn text-white rounded-0">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
});

export default Header;
