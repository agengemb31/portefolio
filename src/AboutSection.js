export default function AboutSection({bg, textColor, height}) 
{
	return (
		<section id="apropos" className={`${bg} ${textColor} container-fluid d-flex flex-column align-items-center justify-content-center`} style={{ scrollMarginTop: `${height}px`

		}}>
		<h1>À Propos</h1>
		<div className="d-flex align-items-center justify-content-center w-100" style={{ gap: "1rem" }}>
		<hr className="border-primary border-3 w-25" />
		<div className="rounded-circle bg-primary" style={{ width: "10px", height: "10px", margin: "0 0.5rem" }}></div>
		<hr className="border-primary border-3 w-25" />
		</div>

		<div className="container-md bg-body border-6 border-primary-subtle rounded d-flex flex-column align-items-center justify-content-center py-5">
		<p className="text-justify my-5"> 
		Passioné par l'informatique, je m'intéresse au développement sous toutes ses formes, de la conception d'application à la résolution de problèmes techniques.<br/> 
		J'aime comprendre comment les systèmes fonctionnent, optimiser les performances et transformer des idées en solutions concrètes. Je développe des projets pour apprendre, progresser et mettre mes compétences en pratique.<br/>
		Ce portfolio regroupe mes réalisations, mes compétences et mon parcours.
		</p>
		<button
  type="button"
  className="btn btn-primary btn-lg mx-auto d-flex align-items-center gap-2"
  style={{ width: "100px" }}
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "CV_AlexisGengembre.pdf";
    link.click();
  }}
>
  <i className="bi bi-download"></i>
  CV
</button>
		</div>


		</section>
	);
}
