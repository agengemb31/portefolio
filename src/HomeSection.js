
import './Section.css';

export default function HomeSection({title, bg, textColor, height}) 
{
  
    return (
    <section
  id="accueil"
  className={` ${textColor} d-flex`}
  style={{
    position: "relative", // <-- important
    height: "100vh",               // hauteur pleine de la fenêtre
    overflow: "hidden",
    scrollMarginTop: `${height}px`,
    marginTop: `${height}px`,
  }}
>
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-100 h-100"
    style={{
      objectFit: "cover",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
    }}
  >
    <source src="/Background.mp4" type="video/mp4" />
  </video>

  {/* Contenu au-dessus de la vidéo */}
  <div className="container d-flex flex-column align-items-center" style={{ gap: "1rem", marginTop: "10rem",}}>
    <img src="/avatar.jpg" className="rounded-circle img-thumbnail" alt="avatar" style={{ height: "40%" }} />
    <h1 className="fw-bold fs-1 ">AGENGEMB</h1>
    <div className="d-flex align-items-center justify-content-center w-100" style={{ gap: "1rem" }}>
    <hr className="border-primary border-3 w-25" />
    <div className="rounded-circle bg-primary" style={{ width: "10px", height: "10px", margin: "0 0.5rem" }}></div>
    <hr className="border-primary border-3 w-25" />
    </div>
    <h3>Software Developper - Web Developper - DevOps</h3>
  </div>
</section>
	
  );

}