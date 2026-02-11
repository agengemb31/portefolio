export default function InfoSheet()
{
	return (
		<div className="col-12 col-lg-5 d-flex flex-column gap-5 align-items-center align-items-lg-start">
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
	);
}
