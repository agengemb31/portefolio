export default function ContactSection({bg, textColor, height}) 
{
    return (
    		<section id="contact" className={`${bg} ${textColor} container-fluid d-flex flex-column align-items-center justify-content-center`} style={{ scrollMarginTop: `${height}px`}}>
    			<h2>Contactez-moi</h2>
     			<div className="d-flex align-items-center justify-content-center w-100" style={{ gap: "1rem" }}>
	    			<hr className="border-primary border-3 w-25" />
	    			<div className="rounded-circle bg-primary" style={{ width: "10px", height: "10px", margin: "0 0.5rem" }}></div>
	    			<hr className="border-primary border-3 w-25" />
    			</div>
			<div className="container d-flex flex-column align-items-center gap-5">
	    			<form onSubmit={(e) => {
              			e.preventDefault();
              			const name = e.target.name.value;
              			const email = e.target.email.value;
              			const message = e.target.message.value;
              			window.location.href = `mailto:gengembre.alexis@gmail.com?subject=Message de ${name}&body=${encodeURIComponent(message + "\n\nDe: " + email)}`;
				}}>
        				<div className="d-flex flex-column gap-5" style={{ width: "800px"}}>
          					<input type="text" name="name" placeholder="Nom" required className="form-control form-control-lg"/>
          					<input type="email" name="email" placeholder="Email" required className="form-control form-control-lg"/>
          					<input type="telephone" name="telephone" placeholder="Téléphone" required className="form-control form-control-lg"/>
          					<textarea name="message" placeholder="Votre message" required className="form-control form-control-lg" 
	    					style={{
							minHeight: "200px",
							height: "200px",
							resize: "vertical",   // L'utilisateur peut agrandir seulement verticalement
							overflow: "auto"
						}}>
	    					</textarea>
	    					<button type="submit" className="btn btn-primary btn-lg mx-auto" style={{ width: "100px"}}>Envoyer</button>
        				</div>
      				</form>
      			</div>
	    		<div className="container-fluid d-flex flex-grow-1 bg-info align-items-center justify-content-center">
	    		<h3 className="fw-bold">Mes Profils</h3>
	    		</div>
      		</section>
          );
}
