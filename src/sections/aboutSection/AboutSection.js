import Divider from './../Divider';
import CVButton from './CVButton';
import BaseSection from './../BaseSection';
import './AboutSection.css';

export default function AboutSection({bg, textColor, height}) 
{
	return (
		<BaseSection id="apropos" bg={bg} textColor={textColor} padding="py-5" style={{ scrollMarginTop: `${height}px`, minHeight: "calc(100dvh - " + height + "px)", overflowY: "auto" }}>
			<h1 className="text-center mb-4">À Propos</h1>
			
			<Divider/>	
		<div className="container-md bg-body border-6 border-primary-subtle rounded d-flex flex-column align-items-center justify-content-center py-5 my-5">
			<h2 className="fs-1 text-center">Alexis Gengembre</h2>
			<h3 className="my-2 fs-2 text-decoration-underline text-center mb-5">Développeur Logiciel</h3>
			<p className="text-justify text-responsive mb-4 mb-md-5 px-4 px-md-5"> Passioné par l'informatique, je m'intéresse au développement sous toutes ses formes, de la conception d'application à la résolution de problèmes techniques.<br/> 
			J'aime comprendre comment les systèmes fonctionnent, optimiser les performances et transformer des idées en solutions concrètes. Je développe des projets pour apprendre, progresser et mettre mes compétences en pratique.<br/>
			Ce portfolio regroupe mes réalisations, mes compétences et mon parcours.
			</p>
		
			<CVButton/>			
		</div>
		</BaseSection>
	);
}
