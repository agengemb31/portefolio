import { Modal, Button } from "react-bootstrap";
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  return (
<Modal show={!!project} onHide={onClose} centered dialogClassName="project-modal-dialog" contentClassName="project-modal-content">
                        <Modal.Header closeButton className="position-relative border-dark">
                                <Modal.Title className="position-absolute start-50 translate-middle-x">{project?.title}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                                <img src={project?.image} alt={project?.title} className="img-fluid rounded mb-3"/>
                                <div className="d-flex flex-column align-items-center mb-3">
                                        <hr className="border-dark w-50 opacity-100" />
                                        <a href={project?.lien} target="_blank" rel="noopener noreferrer" className="text-decoration-none">Répertoire GitHub</a>
                                        <hr className="border-dark w-50 opacity-100" />
                                </div>
                                <p>{project?.description}</p>
                        </Modal.Body>

                        <Modal.Footer className="border-dark">
	  			<div className="w-100 d-flex justify-content-center">
                                	<Button variant="dark" onClick={onClose}>Fermer</Button>
                        	</div>
	  		</Modal.Footer>
                </Modal>
  );
}
