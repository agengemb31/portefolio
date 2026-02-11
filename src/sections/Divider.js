export default function Divider()
{
	return (
		<div className="d-flex align-items-center justify-content-center w-100" style={{ gap: "1rem" }}>
			<hr className="border-primary border-3 w-25" />
			<div className="rounded-circle bg-primary" style={{ width: "10px", height: "10px", margin: "0 0.5rem" }}></div>
			<hr className="border-primary border-3 w-25" />
		</div>
	);
}
