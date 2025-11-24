export default function ContactSection({bg, textColor, height}) 
{
    return (
    <section id="contact" className={`${bg} ${textColor} d-flex align-items-center justify-content-center`} style={{ scrollMarginTop: `${height}px`,
    backgroundImage: "url('/bg-contact.jpg')",  // chemin vers ton image
    backgroundSize: "cover",                  // couvre toute la section
    backgroundPosition: "center",             // centrée
    backgroundRepeat: "no-repeat",            // pas de répétition
    height: "100vh"                          // prend toute la hauteur de l’écran
    }}>
    <div className="d-flex flex-column align-items-center gap-5">
    <h2>Contactez-moi</h2>
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
          <textarea name="message" placeholder="Votre message" required className="form-control form-control-lg"style={{minHeight: "200px", height: "200px", resize: "vertical",   // L'utilisateur peut agrandir seulement verticalement
    overflow: "auto"}}></textarea>
        <button type="submit" className="btn btn-primary btn-lg mx-auto" style={{ width: "100px"}}>Envoyer</button>
        </div>
      </form>
      </div>
      </section>
          );
}