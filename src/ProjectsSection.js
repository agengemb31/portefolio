import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import './Section.css';

export default function ProjectsSection({bg, textColor, height}) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: "Projet 1", image: "/project.jpg", description: "Description du projet 1." },
    { id: 2, title: "Projet 2", image: "/project.jpg", description: "Description du projet 2." },
    { id: 3, title: "Projet 3", image: "/project.jpg", description: "Description du projet 3." },
    { id: 4, title: "Projet 4", image: "/project.jpg", description: "Description du projet 4." },
    { id: 5, title: "Projet 5", image: "/project.jpg", description: "Description du projet 5." },
    { id: 6, title: "Projet 6", image: "/project.jpg", description: "Description du projet 6." },
  ];

  return (
    <section
      id="projets"
      className={`vh-100 ${bg} ${textColor} d-flex flex-column align-items-center justify-content-center`} style={{ scrollMarginTop: `${height}px`, backgroundImage: "url('/bg-projects.jpg')",  // chemin vers ton image
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