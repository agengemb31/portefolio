import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import './Section.css';

export default function ProjectsSection({bg, textColor, height}) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: "Transcendence", image: "/transcendence-screen1.png", description: "Application Web d'un jeu pong en réseau via la framework Django avec création et gestion de compte, tchat et plusieurs modes de jeu" },
    { id: 2, title: "Minishell", image: "/minishell-screen1.png", description: "Implementation d'un invité de commande simplifé avec variables d'environement, builtins, redirections et heredoc" },
    { id: 3, title: "Cube3D", image: "/cube3D-screen1.png", description: "Implementation de l'algorithme de raycasting e langage C avec prise en charge des textures et parsing selon certaines règles des maps." },
    { id: 4, title: "Portfolio", image: "/portfolio-screen1.png", description: "Site Web présentant mes principaux projets étudiants et personnels via la bibliothéque React et la framework bootstrap." },
    { id: 5, title: "Projet 5", image: "/project.jpg", description: "Description du projet 5." },
    { id: 6, title: "Projet 6", image: "/project.jpg", description: "Description du projet 6." },
  ];

  return (
    <section
      id="projets"
      className={`container-fluid vh-100 ${bg} ${textColor} d-flex flex-column align-items-center justify-content-center`} style={{ scrollMarginTop: `${height}px`, backgroundImage: "url('/bg-projects.jpg')",  // chemin vers ton image
    backgroundSize: "cover",                  // couvre toute la section
    backgroundPosition: "center",             // centrée
    backgroundRepeat: "no-repeat",            // pas de répétition
    height: "100vh"                          // prend toute la hauteur de l’écran
    }}
    >
      <h2 className="mb-4">Mes Projets</h2>

      {/* Grille des vignettes */}
      <div className="container">
        <div className="row g-4"> {/* g-4 = espace entre colonnes */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-12 col-sm-6 col-md-4"
              onClick={() => setSelectedProject(project)}
              style={{ cursor: "pointer" }}
            >
              <div className="card shadow-sm h-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          
          <Modal show={!!selectedProject} onHide={() => setSelectedProject(null)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedProject?.image}
            alt={selectedProject?.title}
            className="img-fluid rounded mb-3"
          />
          <p>{selectedProject?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedProject(null)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
