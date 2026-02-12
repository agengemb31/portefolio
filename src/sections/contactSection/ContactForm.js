import emailjs from "@emailjs/browser";

export default function ContactForm()
{
	const sendEmail = (e) => {
                e.preventDefault();

                emailjs.sendForm(
                        process.env.REACT_APP_EMAILJS_SERVICE_ID,
                        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                        e.target,
                        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
                )
                .then(() => {
                        alert("Message envoyé avec succès !");
                        e.target.reset();
                })
                        .catch((error) => {
                                console.error(error);
                                alert("Une erreur est survenue lors de l'envoi.");
                        });
        };

	return (
 <div className="col-12 col-lg-7 mt-4 mt-lg-0">
                                                <form onSubmit={sendEmail}>
                                                        <div className="d-flex flex-column gap-4 gap-md-5">
                                                                <input name="name" className="form-control form-control-lg" placeholder="Nom" />
                                                                <input name="email" className="form-control form-control-lg" placeholder="Email" />
                                                                <input name="phone"className="form-control form-control-lg" placeholder="Téléphone" />
                                                                <textarea name="message" className="form-control form-control-lg" placeholder="Votre message"style={{ minHeight: 200 }} />
                                                                <button type="submit" className="btn btn-primary btn-lg mx-auto">Envoyer</button>
                                                        </div>
                                                </form>
                                        </div>
	);
}
