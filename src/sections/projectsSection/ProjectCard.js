export default function ProjectCard({ project, onSelect }) {
  return (
	<div key={project.id} className="col-12 col-sm-6 col-md-4" onClick={() => onSelect(project)} style={{ cursor: "pointer" }}>
                                  <div className="card shadow-sm">
                                        <img src={project.image} alt={project.title} className="card-img-top" style={{ objectFit: "cover", height: "200px" }}/>
                                        <div className="card-body text-center">
                                                <h5 className="card-title">{project.title}</h5>
                                        </div>
                                 </div>
                                </div>

  );
}
