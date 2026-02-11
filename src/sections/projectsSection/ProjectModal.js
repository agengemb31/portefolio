import { Modal, Button } from "react-bootstrap";

export default function ProjectModal({ project, onClose }) {
  return (
<Modal show={!!project} onHide={onClose} centered size="lg">
                        <Modal.Header closeButton>
                                <Modal.Title>{project?.title}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                                <img src={project?.image} alt={project?.title} className="img-fluid rounded mb-3"/>
                                <div className="d-flex flex-column align-items-center mb-3">
                                        <hr className="border-secondary w-50 opacity-50" />
                                        <a href={project?.lien} target="_blank" rel="noopener noreferrer" className="text-decoration-none">Lien GitHub du projet</a>
                                        <hr className="border-secondary w-50 opacity-50" />
                                </div>
                                <p>{project?.description}</p>
                        </Modal.Body>

                        <Modal.Footer>
                                <Button variant="secondary" onClick={onClose}>Fermer</Button>
                        </Modal.Footer>
                </Modal>
  );
}
