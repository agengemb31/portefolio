export default function ContactSection({bg, textColor, height}) 
{
	return (
		<section
  id="contact"
  className={`${bg} ${textColor} container-fluid py-5`}
  style={{ scrollMarginTop: `${height}px`}}
>
  <h2 className="text-center mb-4">Contactez-moi</h2>

  <div className="d-flex align-items-center justify-content-center w-100 mb-5" style={{ gap: "1rem" }}>
    <hr className="border-primary border-3 w-25" />
    <div className="rounded-circle bg-primary" style={{ width: "10px", height: "10px" }}></div>
    <hr className="border-primary border-3 w-25" />
  </div>

  <div className="container">
    <div className="row align-items-start text-center text-lg-start">

      {/* COLONNE GAUCHE */}
      <div className="col-12 col-lg-5 d-flex flex-column gap-4 align-items-center align-items-lg-start">
        <div className="d-flex align-items-center gap-3">
          <img src="/e-mail.png" alt="Icone E-mail" width={32} />
          <p className="mb-0">gengembre.alexis@gmail.com</p>
        </div>

        <div className="d-flex align-items-center gap-3">
          <img src="/telephone.png" alt="Icone Telephone" width={32} />
          <p className="mb-0">07 67 56 28 71</p>
        </div>

        <div className="d-flex align-items-center gap-3">
          <img src="/gps.png" alt="Icone GPS"w idth={32} />
          <p className="mb-0">France</p>
        </div>

        <h3 className="fw-bold mt-4">Mes Profils</h3>
        <div className="d-flex gap-3">
          <a href="https://github.com/agengemb31" target="_blank" rel="noopener noreferrer">
				<img src="/github-logo.png" alt="Logo Github" style={{ cursor: "pointer" }}/>
				</a>
				<a href="https://www.linkedin.com/in/alexis-gengembre-296386371/" target="_blank" rel="noopener noreferrer">
				<img src="/linkedin-logo.png" alt="Logo linkedin" style={{ cursor: "pointer" }}/>
				</a>
	        </div>
      </div>

      {/* COLONNE DROITE */}
      <div className="col-12 col-lg-7 mt-4 mt-lg-0">
        <form>
          <div className="d-flex flex-column gap-4">
            <input className="form-control form-control-lg" placeholder="Nom" />
            <input className="form-control form-control-lg" placeholder="Email" />
            <input className="form-control form-control-lg" placeholder="Téléphone" />
            <textarea className="form-control form-control-lg" placeholder="Votre message"style={{ minHeight: 200 }} />
            <button className="btn btn-primary btn-lg mx-auto">Envoyer</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</section>
	);
}
