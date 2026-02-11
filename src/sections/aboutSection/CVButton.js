export default function CVButton()
{ 
	return (
			<button type="button" className="btn btn-primary btn-lg mx-auto d-flex align-items-center gap-2" style={{ width: "100px" }}
                                onClick={() => {
                                        const link = document.createElement("a");
                                        link.href = "/CV.pdf";
                                        link.download = "CV_AlexisGengembre.pdf";
                                        link.click();
                                }}>
                                <i className="bi bi-download"></i>
                                CV
                        </button>
	);
}

