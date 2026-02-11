
import './../Section.css';
import BaseSection from './../BaseSection';
import Divider from './../Divider';

export default function HomeSection({title, bg, textColor, height}) 
{
  
    return (
    		<BaseSection id="accueil" textColor={textColor} padding="py-0" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
  			<video autoPlay loop muted playsInline className="w-100 h-100" style={{ objectFit: "cover", position: "absolute", top: 0, left: 0, zIndex: -1 }}>
  				<source src="/background.mp4" type="video/mp4" />
	    		</video>

  		{/* Contenu au-dessus de la vidéo */}
  			<div className="container d-flex flex-column align-items-center justify-content-center" style={{ gap: "1rem", height: "90%"}}>
    				<img src="/avatar.jpg" className="rounded-circle img-thumbnail" alt="avatar" style={{ height: "35%" }} />
    				<h1 className="fw-bold fs-1 ">AGENGEMB</h1>
    				
    				<Divider/>	
	    			<h3 className="text-center">Développeur Logiciel - Développeur Web - DevOps</h3>
  			</div>
	    	</BaseSection>
  );
}
