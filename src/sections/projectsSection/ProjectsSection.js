import React, { useState } from "react";
import BaseSection from './../BaseSection';
import Divider from './../Divider';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function ProjectsSection({ bg, textColor, height }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: "Transcendence", image: "/transcendence-screen1.png", lien: "https://github.com/agengemb31/Transcendence", description: "Application web multijoueur Pong développée avec Django, intégrant gestion de comptes, chat en temps réel et plusieurs modes de jeu." },
    { id: 2, title: "Minishell", image: "/minishell-screen1.png", lien: "https://github.com/agengemb31/minishell", description: "Shell implémenté en C et basé sur Bash, avec gestion des variables d’environnement, commandes internes, redirections et heredoc." },
    { id: 3, title: "Cube3D", image: "/cube3D-screen1.png", lien: "https://github.com/agengemb31/cube3D", description: "Moteur 3D simplifié en C utilisant le raycasting, avec support des textures et parsing des cartes selon des règles spécifiques." },
    { id: 4, title: "Portfolio", image: "/portfolio-screen1.png", lien: "https://github.com/agengemb31/portefolio", description: "Site web interactif réalisé avec React et Bootstrap, mettant en avant certains de mes projets étudiants et personnels, avec navigation fluide, mise en page responsive et design moderne." },
    { id: 5, title: "Serveur Irc", image: "/irc-screen.png", lien: "https://github.com/agengemb31/ft_irc", description: "Serveur IRC développé en C++, implémentant les commandes principales du protocole IRC (PASS, NICK, USER, JOIN, MODE, PRIVMSG, KICK, etc.) avec gestion des utilisateurs, des channels et des droits. Le serveur repose sur une architecture réseau bas niveau (sockets TCP) et une machine d’état pour l’enregistrement des clients." },
    { id: 6, title: "Inception", image: "/inception-screen.png", lien: "https://github.com/agengemb31/Inception", description: "Déploiement d’un environnement web complet avec Docker Compose : un conteneur Nginx pour le serveur web, un conteneur WordPress pour le système de gestion de contenu. et un conteneur MariaDB pour la base de données." },
  ];

  return (
	  <BaseSection id="projets" bg={bg} textColor={textColor} padding="py-5" style={{ scrollMarginTop: `${height}px`, backgroundImage: "url('/bg-projects.jpg')", backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat", overflowX: "hidden" }}>
		<h1 className="text-center mb-4">Mes Projets</h1>

		<Divider/>		
		<div className="container my-5">
			  <div className="row gx-4 gy-4 justify-content-center">
			  {projects.map((project) => (
				  <ProjectCard key={project.id} project={project} onSelect={setSelectedProject}/>

            		))}
			</div>
		<ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)}/>

		
		</div>
	</BaseSection>
  );
}

