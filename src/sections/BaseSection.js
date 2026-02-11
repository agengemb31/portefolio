export default function BaseSection({id, bg, textColor, padding, style = {}, children}) {
	return (
		<section id={id} className={`container-fluid d-flex flex-column ${bg} ${textColor} ${padding}`} style={style}>
			{children}
		</section>
	);
}
